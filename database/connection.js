const mongoose = require('mongoose');

const dbName = env('NODE_ENV').toLowerCase() === 'test' ? 'test' : config('db').name;

mongoose.connect(`mongodb://${config('db').host + ':' + config('db').port + '/' + dbName}`, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    console.log("database connected!")
});

module.exports = connection;

