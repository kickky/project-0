const path = require('path');

/**
 *
 * @param _destinationPath path
 * @returns {*|string}
 */
global.resolvePath = function (_destinationPath) {
    let pathDelimiter = '/';
    if(_destinationPath.includes('\\')) {
        pathDelimiter = '\\';
    }
    return path.normalize(path.resolve(__projectdir, ..._destinationPath.split(pathDelimiter)));
}
