const mongoose = require('mongoose');
const settings = require('./../_settings');

mongoose.connect(`mongodb://${settings.db.host + ':' + settings.db.port + '/' + settings.db.name}`, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', function () {
    console.log("database connected!")
});

module.exports = connection;

