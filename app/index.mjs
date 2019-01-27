import feathers from '@feathersjs/feathers';
import socketio from '@feathersjs/socketio';

// Create a Feathers application
const app = feathers();

// Configure the Socket.io transport
app.configure(socketio());

// Start the server on port 3030
app.listen(3030);

