const EventEmitter= require('events');

const emitter=new EventEmitter();

emitter.on('order pizza',()=>{
    console.log('Order recieved, baking a pizza')
});

emitter.emit('order pizza');