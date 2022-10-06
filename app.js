const EventEmiter = require('events')
const customEmitter = new EventEmiter()

// we have an event on which name is 'response' ==> when the event take place ==> the call back function will be executed. 
customEmitter.on('response',()=> { 
    console.log(`data received`)
})
customEmitter.on('no',()=> { 
    console.log('something')
})
// when the we emit the event name 'response' ==>  
customEmitter.emit('response')
customEmitter.emit('no')




