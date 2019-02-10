const path = require('path');
require('../includes/helpers');
const AgentAppClass = require('./App');


const feathers = require('@feathersjs/feathers');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');


// This creates an app that is both, an Express and Feathers app
const app = express(feathers());

app.use(express.static(path.resolve(__projectdir, 'public')));
// Turn on JSON body parsing for REST services
app.use(express.json())
// Turn on URL-encoded body parsing for REST services
app.use(express.urlencoded({extended: true}));
// Set up REST transport using Express
app.configure(express.rest());
// Configure the Socket.io transport
app.configure(socketio());
// Set up an error handler that gives us nicer errors
app.use(express.errorHandler());

new AgentAppClass(app);

// Start the server on port 3030
app.listen(3030);