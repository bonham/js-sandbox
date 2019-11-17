var async3 = require('./async3')

var givePromi = async3.returnPromi
var promi = givePromi()
console.log('Waiting for the promi to resolve')
promi.then((value) => { console.log(value) })
