const logEvents = require('./logevents');
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

// Initialize an object
const myEmitter = new MyEmitter();

// Add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // Emit event
    myEmitter.emit('log', 'log event emitted');
}, 1000);
