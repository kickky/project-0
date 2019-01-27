
const config = {
    env: "dev",
    db: {
        host: '',
        login: '',
        password: '',
        name: ''
    }
};

export default function (key) {
    return config[key];
}