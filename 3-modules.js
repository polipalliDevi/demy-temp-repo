// CommonJs, every file is module (by default)


// Modules - ENcapsulated Code (only share minimum)

const names=require("./4-names")
const sayHi=require("./5-utils")

const data = require("./6-alternative flavor")
console.log(data)

require('./7-mind-grenade')


sayHi("devi")
sayHi(names.john)
sayHi(names.peter)

