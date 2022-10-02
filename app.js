const _ = require('lodash')
const items = [1, [3, 4, 5, [4, 5]]]


const result = _.add(1, 1)
// console.log(result)
const newItem = _.flattenDeep(items)
console.log(newItem)

console.log('1 task')
setTimeout(() => {
    console.log('2 task')
}, 0);
console.log('3 task')



console.log('this 444')
