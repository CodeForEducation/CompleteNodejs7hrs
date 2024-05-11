const logEvents= require('./events.js')
const EventEmitter= require('events')
class myEmitter extends EventEmitter{}
//intialize a object
const MyEmitter= new myEmitter 
//listening to events
MyEmitter.on('event21',(msg)=>
{
logEvents(msg)
})
// emit event

MyEmitter.emit('event21','my event emitted')