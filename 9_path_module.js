const path = require('path')
console.log(path.sep)
const filePath = path.join('/ content', 'test.txt')
console.log(filePath)



const base = path.basename(filePath)
console.log(base)


// resolve that can url where this file located, 
const absolute = path.resolve(__dirname, 'content', 'those', 'test.txt')
console.log(absolute)

