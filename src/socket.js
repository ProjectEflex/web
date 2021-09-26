import * as signalR from '@microsoft/signalr';

async function hardBoot(newConnection, userId, statusCallback, logsCallback) {
    try {
        statusCallback("progress");
        await newConnection.start();
        await newConnection.invoke("registerConnection", userId);
        statusCallback("connected");
        newConnection.on('updateFromServer', (message) => {
            logsCallback(prevData => prevData.concat([{
                timestamp: new Date().toLocaleString(),
                message
            }]));
        });
    } catch (error) {
        statusCallback("disconnected");
        console.error(error);
    }
}

async function coldBoot(newConnection, userId, statusCallback, logsCallback) {
    try {
        statusCallback("progress");
        await newConnection.invoke("registerConnection", userId);
        statusCallback("connected");
        newConnection.on('updateFromServer', (message) => {
            logsCallback(prevData => prevData.concat([{
                timestamp: new Date().toLocaleString(),
                message
            }]));
        });
    } catch (error) {
        statusCallback("disconnected");
        console.error(error);
    }
}

export async function initializeSocket(userId, statusCallback, logsCallback) {
    const BASE_URL = process.env.REACT_APP_BASE_URL;
    const SOCKET_URL = `${BASE_URL}/api/userhub`;
    const newConnection = new signalR.HubConnectionBuilder()
        .withUrl(SOCKET_URL)
        .configureLogging(signalR.LogLevel.Information)
        .withAutomaticReconnect()
        .build();
    await hardBoot(newConnection, userId, statusCallback, logsCallback);
    newConnection.onclose(async () => {
        statusCallback("disconnected");
        newConnection.off('updateFromServer');
        await hardBoot(newConnection, userId, statusCallback, logsCallback);
    });
    newConnection.onreconnecting(async () => {
        newConnection.off('updateFromServer');
        statusCallback("progress");
    });
    newConnection.onreconnected(async () => {
        await coldBoot(newConnection, userId, statusCallback, logsCallback);
    });
}