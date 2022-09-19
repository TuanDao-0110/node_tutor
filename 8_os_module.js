// OS module: 
const os = require('os')
// we can destructor by all porperties on os
// infor about current user
const user = os.userInfo()
console.log(user)

// method return the system uptime in seconds
console.log(`the systerm uptime is ${os.uptime()} second`)
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)