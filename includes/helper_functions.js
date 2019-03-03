const path = require('path');


global.env = function (_param) {
    let result = null;
    if(_param) {
        try {
           result = process.env[_param];
        } catch (e) {
            result = null;
        }
    }
    return result;
};
/**
 * @param {String} _destinationPath path
 * @returns {*|string}
 */
global.resolvePath = function (_destinationPath) {
    let pathDelimiter = '/';
    if(_destinationPath.includes('\\')) {
        pathDelimiter = '\\';
    }
    return path.normalize(path.resolve(__projectdir, ..._destinationPath.split(pathDelimiter)));
};

/* Settings helper */
const settings = require(resolvePath('_settings'));
global.config = (key) => {
    if (settings[key]) {
        return settings[key];
    }
    return null;
};

