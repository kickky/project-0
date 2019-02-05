const settings = {
    env: process.env.NODE_ENV,
    host: 'localhost',
    db: {
        host: '127.0.0.1',
        port: '27017',
        login: 'root',
        password: '',
        name: 'project_db'
    }
};
module.exports = settings;