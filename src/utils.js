export function makeFlatJSON(jsonData, key=null, reducedObject = {}) {
    if (typeof jsonData === 'object') {
        Object.keys(jsonData)
            .forEach(jsonKey => {
                const jsonValue = jsonData[jsonKey];
                if (typeof jsonValue !== 'object') {
                    reducedObject[key ? `${key}.${jsonKey}` : jsonKey] = jsonValue;
                } else {
                    reducedObject = makeFlatJSON(jsonValue, key ? `${key}.${jsonKey}` : jsonKey, reducedObject);
                }
            });
    }
    return reducedObject;
}