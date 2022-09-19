// working with fs module

const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf-8', (err, result) => {
    if (err) {
        console.log(err)
        return;
    }
    const first = result
    readFile('./content/second.txt', 'utf-8', (err, result) => {
        if (err) {
            console.log(err)
            return;
        }
        const second = result
        writeFile('./content/result-sync.txt', 'new data use write file : ', (err, result) => {
            if (err) {
                console.log('write file err ' + err)
                return
            }
            console.log('result ' + result)
        })
    })




})


