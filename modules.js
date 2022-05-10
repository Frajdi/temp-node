const names = require('./4-names');
const sayHi = require('./5-utils');
const data = require('./6-alternative-flavour')
require('./7-mind-granade')

sayHi('Susan')
sayHi(names.john)
sayHi(names.peter)
sayHi(data.items[0])
sayHi(data.singlePerson.name)
