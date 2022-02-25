// npm - global command, comes with node
//npm --version

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any porject
// nmp install -g <pakcageName>
// sudo npm install -g <packageName> (mac)


// package.json - manifest file (stors important info about project/package)
// manual apporach (create package.json in the root ,create properities etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const { compact } = require('lodash')
const _ =require('lodash')

const items = [1,[2,[3,[4]]]]

const newItems = _.flatMapDeep(items)
console.log(newItems)