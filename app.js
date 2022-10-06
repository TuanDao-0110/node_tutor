const { readFile, writeFile } = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        const result = await readFile('./content/first.txt', 'utf-8')
        const result_2 = await readFile('./content/first.txt', 'utf-8')
        await writeFile('./content/result-mind-grenade.txt', `this is done by 2 result :${result} ${result_2} `,
         { flag: 'a' })
        console.log(result)
        console.log('second result :' + result_2)

    } catch (error) {
        console.log(error)
    }

}
start()
// const getText = (path) => {
//     return new Promise((res, rej) => {

//         readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 rej('err')
//                 console.log('error')
//                 return
//             }
//             else {
//                 res('data')
//                 console.log(data)
//             }
//         })
//     })
// }





