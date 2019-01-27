import settings from './_settings';

export default () => {
    global.config = (key) => {
        if(settings[key]) {
            return settings[key];
        }
        return null;
    };
}
