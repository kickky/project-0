const path = require('path');

const settings = require('./_settings');



global.__projectdir = path.resolve(__dirname);

global.config = (key) => {
    if (settings[key]) {
        return settings[key];
    }
    return null;
};
