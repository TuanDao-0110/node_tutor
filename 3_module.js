// Modules
// now we start to take value from global module
const names = require('./4-names')
console.log( names )
// use destruction method to take value from module 
const { john, pete } = names
// import sayHi function 
const sayHi = require("./5-ultis")
// console.log('say hi :' + sayHi)
// import 6 alternative 
const data = require('./6-alternative')
console.log(data)
// import 7 genrade
const run = require('./7-mind-grenade')
// and now start to use it
sayHi('susan')
sayHi(pete)
sayHi(john)

