// working with fs module

const { readFileSync, writeFileSync } = require('fs')
// how to read file data
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')

console.log(first +
    ' ' + second)

// with writeFileSync that help to create a new file for with file name and data for it:
writeFileSync('./content/result-sync.txt', `here is result ::${first} + second : ${second} flag is ${flag = 'a'}`)



// now we can take a look on the file
console.log(readFileSync('./content/result-sync.txt', 'utf-8'))



