const { readFile } = require('fs')
console.log('started')
readFile('./content/first.txt', 'utf-8', (err, res) => {
    if (err) {
        console.log('error : ')
        return
    }
    console.log(`result:  ` + res)
    console.log('completed 1st task')

})
console.log('starting next task')


console.log('first')
setTimeout(() => {
    console.log('second')
}, 0)

console.log('third')


// 