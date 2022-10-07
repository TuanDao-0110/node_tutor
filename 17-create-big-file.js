const { writeFileSync } = require('fs')
for (i = 0; i < 1000000; i++) {
    writeFileSync('./content/big.txt', `hello world ${i}\n`, { flag: 'a' })
}
// a: creates the file (if it does not exist) or appends to the existing data (if it does exist)
// ax and wx: creates the file(if it does not exist) or throws an error(if it already exists)