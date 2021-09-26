import { useState } from 'react';
import axios from 'axios';
import { Buffer } from 'buffer';
import { prettyPrintJson } from 'pretty-print-json';
import {
  Navbar,
  Container,
  Row,
  Col,
  Form,
  Button,
  Table
} from 'react-bootstrap';
import { Formik } from 'formik';
import moment from 'moment';
import { makeFlatJSON } from './utils';
import { initializeSocket } from './socket';
import GlobalFilter from './GlobalFilter';
import ErrorAlert from './ErrorAlert';
import './App.css';

const BASE_URL = process.env.REACT_APP_BASE_URL;

function App() {

  const [actualConfig, setActualConfig] = useState({});
  const [config, setConfig] = useState({});
  const [socketLogs, setSocketLogs] = useState([]);
  const [socketStatus, setSocketStatus] = useState();
  const [skipConfigKeys, setSkipConfigKeys] = useState([
    "boxIdBin",
    "boxIdText",
    "analog_channels.0.id",
    "analog_channels.0.name",
    "analog_channels.0.volt",
    "analog_channels.0.ampRating",
    "analog_channels.1.id",
    "analog_channels.1.name",
    "analog_channels.1.volt",
    "analog_channels.1.ampRating",
    "analog_channels.2.id",
    "analog_channels.2.name",
    "analog_channels.2.volt",
    "analog_channels.2.ampRating",
    "analog_channels.3.id",
    "analog_channels.3.name",
    "analog_channels.3.volt",
    "analog_channels.3.ampRating",
    "analog_channels.4.id",
    "analog_channels.4.name",
    "analog_channels.4.volt",
    "analog_channels.4.ampRating",
    "analog_channels.5.id",
    "analog_channels.5.name",
    "analog_channels.5.volt",
    "analog_channels.5.ampRating",
    "analog_channels.6.id",
    "analog_channels.6.name",
    "analog_channels.6.volt",
    "analog_channels.6.ampRating",
    "analog_channels.7.id",
    "analog_channels.7.name",
    "analog_channels.7.volt",
    "analog_channels.7.ampRating",
    "load_channels.0.currentRating",
    "load_channels.0.delayTime",
    "load_channels.0.devices.0.name",
    "load_channels.0.devices.0.phase",
    "load_channels.0.devices.1.name",
    "load_channels.0.devices.1.phase",
    "load_channels.0.devices.2.name",
    "load_channels.0.devices.2.phase",
    "load_channels.1.currentRating",
  "load_channels.1.delayTime",
  "load_channels.1.devices.0.name",
  "load_channels.1.devices.0.phase",
  "load_channels.1.devices.1.name",
  "load_channels.1.devices.1.phase",
  "load_channels.1.devices.2.name",
  "load_channels.1.devices.2.phase",
  "load_channels.2.currentRating",
  "load_channels.2.delayTime",
  "load_channels.2.devices.0.name",
  "load_channels.2.devices.0.phase",
  "load_channels.2.devices.1.name",
  "load_channels.2.devices.1.phase",
  "load_channels.2.devices.2.name",
  "load_channels.2.devices.2.phase",
  "load_channels.3.name",
  "load_channels.3.currentRating",
  "load_channels.3.delayTime",
  "load_channels.3.devices.0.name",
  "load_channels.3.devices.0.phase",
  "load_channels.3.devices.1.name",
  "load_channels.3.devices.1.phase",
  "load_channels.3.devices.2.name",
  "load_channels.3.devices.2.phase",
  "load_channels.4.delayTime",
  "load_channels.4.devices.0.name",
  "load_channels.4.devices.0.phase",
  "load_channels.4.devices.1.name",
  "load_channels.4.devices.1.phase",
  "load_channels.4.devices.2.name",
  "load_channels.4.devices.2.phase",
  "load_channels.5.currentRating",
  "load_channels.5.delayTime",
  "load_channels.5.devices.0.name",
  "load_channels.5.devices.0.phase",
  "load_channels.5.devices.1.name",
  "load_channels.5.devices.1.phase",
  "load_channels.5.devices.2.name",
  "load_channels.5.devices.2.phase",
  "user_preferences.currency",
  "user_preferences.lock_energy",
  "user_preferences.time",
  "user_preferences.energy_unit",
  "key",
  "name",
  "at_home",
  "selected_scheme",
  "savings_selection",
  "battery_saver_selection",
  "tou_selection",
  "demand_selection",
  "currentLoadStatus",
  "grid_type",
  "energy_selection"
  ]);
  const [filteredConfig, setFilteredConfig] = useState({});
  const [filterApplied, setFilterApplied] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  function handleData(dataB64String) {
    try { 
      const dataInJSON = JSON.parse(Buffer.from(dataB64String, 'base64').toString('ascii'));
      // console.log('CONFIG', JSON.stringify());
      setActualConfig({...dataInJSON});
      const configData = makeFlatJSON({...dataInJSON});
      let filteredConfigData = {};
      Object.keys(configData).filter(key => !skipConfigKeys.includes(key)).forEach(key => {
        filteredConfigData[key] = configData[key]
      });
      setConfig({...filteredConfigData});
    } catch(e) {
      console.log('error', e)
      setErrorMsg(e.toString());
    }
  }

  function getConfig(userIdBin, boxIdBin) {
    axios
      .get(`${BASE_URL}/api/BoxFiles/File?UserIdBin=${userIdBin}&BoxIdBin=${boxIdBin}&filename=config.json`)
      .then((res) => res.data)
      .then(data => {
        handleData(data);
      })
      .catch(err => setErrorMsg(err.toString()));
  }

  function search(query) {
    if(query) {
      const configData = makeFlatJSON({...actualConfig});
      let filteredConfigData = {};
      Object.keys(configData).filter(key => key.startsWith(query)).forEach(key => {
        filteredConfigData[key] = configData[key]
      });
      setFilteredConfig({...filteredConfigData});
      setFilterApplied(true);
    } else {
      setFilterApplied(false);
      setFilteredConfig({});
    }
    
  }

  function getHomeStatus() {
    const atHome = actualConfig.at_home;
    if (typeof atHome === 'boolean') {
      return atHome ? 'Home' : 'Away';
    }
    return '';
  }

  function isChannelOverridenNow(override) {
    if (override) {
      const { years, months, date, hours, minutes, seconds, milliseconds } = override;
      if (years && months && date && hours && minutes && seconds && milliseconds ) {
        return moment()
          .utc()
          .year(years)
          .month(months)
          .date(date)
          .hour(hours)
          .minute(minutes)
          .second(seconds)
          .millisecond(milliseconds)
          .isAfter(moment().utc())
      } else {
        return false;
      }
    }
    return false;
  }

  function getOverrideValues() {
    if(Array.isArray(actualConfig.load_channels)) {
      const overridenLoads = actualConfig.load_channels.reduce((acc, channel) => {
        let overrideVal = channel['override'] ? JSON.parse(channel['override']) : null;
        if (isChannelOverridenNow(overrideVal)) {
          acc.push(channel.name);
        }
        return acc;
      }, []);
      return overridenLoads.join(',');
    }
    return '';
  }

  function getSocketStatusHtml() {
    let socketColor;
    if (socketStatus === 'connected') {
      socketColor = 'green';
    } else if (socketStatus === 'disconnected') {
      socketColor = 'red';
    } else if (socketStatus === 'progress') {
      socketColor = 'yellow';
    } else {
      socketColor = 'grey';
    }
    return <div style={{backgroundColor: socketColor}} className="socket-status-holder"></div>;
  }

  function renderSummary() {
    return (
      <>
        <div className="rounded border p-2 mb-2">
          <h6> Summary </h6>
          <Table striped bordered hover className="mb-0">
            <tbody>
              <tr>
                <td>Home / Away</td>
                <td>{ getHomeStatus() }</td>
              </tr>
              <tr>
                <td>Energy Selection</td>
                <td>{ actualConfig['energy_selection'] }</td>
              </tr>
              <tr>
                <td>Battery Saver Selection</td>
                <td>{ actualConfig['battery_saver_selection'] }</td>
              </tr>
              <tr>
                <td>TOU Selection</td>
                <td>{ actualConfig['tou_selection'] }</td>
              </tr>
              <tr>
                <td>Demand Selection</td>
                <td>{ actualConfig['demand_selection'] }</td>
              </tr>
              <tr>
                <td>Overriden Loads</td>
                <td>{ getOverrideValues() }</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <div className="rounded border p-2 mb-2 socket__viewer">
          <h6> Socket Logs {getSocketStatusHtml()} </h6>
          {socketLogs?.length > 0 ? <Table striped bordered hover className="mb-0" style={{wordBreak: "break-word"}}>
            <thead>
              <tr>
                <th>Local Time</th>
                <th>Logs</th>
              </tr>
            </thead>
            <tbody>
              {socketLogs.map((socketLog, index) => (
                <tr key={index}>
                  <td>{socketLog.timestamp}</td>
                  <td>{socketLog.message}</td>
                </tr>
              ))}
            </tbody>
          </Table> : <span>[]</span>}
        </div>
      </>
    )
  }

  function renderGETConfigForm() {
    return (
      <>
        <div className="border rounded p-2 mb-2">
          <Formik
            initialValues={{
              UserIdBin: '3rK2D4gvHAyn10CmYaKaCQ==',
              BoxIdBin: 'EeuTzQQVrVCeIQJCCmQAAw=='
            }}
            onSubmit={async (values) => {
              getConfig(values.UserIdBin, values.BoxIdBin);
              await initializeSocket(values.UserIdBin, setSocketStatus, setSocketLogs);
            }}
          >
            {props => (
              <Form onSubmit={props.handleSubmit}>
                <Row className="align-items-end">
                  <Col sm={12} lg={4}>
                    <Form.Label>UserIdBin</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="UserIdBin"
                      name="UserIdBin"
                      className="mb-1"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values["UserIdBin"]}
                    />
                  </Col>
                  <Col sm={12} lg={4}>
                    <Form.Label>BoxIdBin</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="BoxIdBin"
                      name="BoxIdBin"
                      className="mb-1"
                      onChange={props.handleChange}
                      onBlur={props.handleBlur}
                      value={props.values["BoxIdBin"]}
                    />
                  </Col>
                  <Col sm={12} lg={4}>
                    <Button
                      size="sm"
                      type="submit"
                      className="mb-1"
                    >
                      Submit
                    </Button>
                    <Button
                      size="sm"
                      className="ms-2 mb-1"
                      variant="outline-secondary"
                      onClick={props.handleReset}
                    >
                      Reset
                    </Button>
                  </Col>
                </Row>
              </Form>
            )}
          </Formik>
        </div>
        <div className="border rounded p-2">
          <h6> Result </h6>
          <GlobalFilter onSearch={search} />
            <pre
              className="config__viewer my-2"
              dangerouslySetInnerHTML={{ __html: prettyPrintJson.toHtml(filterApplied ? filteredConfig : config)}}
            />
        </div>
      </>
    )
  }

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            Eflex
          </Navbar.Brand>
        </Container>
      </Navbar>
      <ErrorAlert errorMsg={errorMsg} />
      <Container className="mt-2">
        <Row>
          <Col sm={{order: 'last'}} md={{ span:6, order: 'first'}}>
            { renderGETConfigForm() }
          </Col>
          <Col sm={{order: 'last'}} md={{ span:6, order: 'first'}}>
            { renderSummary() }
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
