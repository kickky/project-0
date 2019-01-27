const settings = require('./_settings');


global.config = (key) => {
    if (settings[key]) {
        return settings[key];
    }
    return null;
};
