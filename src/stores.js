var screens = {
    mobile : 450,
    tab : 900,
    computer : 1200,
    custom : 0
}

var constantStyles = {}
var smallWindowStyles = {}
var mediumWindowStyles = {}
var largeWindowStyles = {}
var customWindowStyles = {}

/**
 * reset all stores
 * 
 */

function flush(){
    screens = {
        mobile : 450,
        tab : 900,
        computer : 1200,
        custom : 0
    }
    
    constantStyles = {}
    smallWindowStyles = {}
    mediumWindowStyles = {}
    largeWindowStyles = {}
    customWindowStyles = {} 
}

module.exports = { screens, constantStyles, smallWindowStyles, mediumWindowStyles, largeWindowStyles, customWindowStyles, flush }