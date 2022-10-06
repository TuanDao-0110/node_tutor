const EventEmiter = require('events')
const customEmitter = new EventEmiter()

// we have an event on which name is 'response' ==> when the event take place ==> the call back function will be executed. 
customEmitter.on('response', (name, id) => {
    console.log('user name is ' + name + '  id ' + id)
    console.log(`data received`)
})
customEmitter.on('response', () => {
    console.log('no for me event on')
})
// when the we emit the event name 'response' ==>  
customEmitter.emit('response', 'john', 43)








