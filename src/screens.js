const { screens } = require('./stores.js') 

function mediaQueryComponent(args){
    screens.mobile = args[0]
    screens.tab = args[1]
    screens.computer = args[2]
    screens.custom = args[3]
}

module.exports = { mediaQueryComponent }
