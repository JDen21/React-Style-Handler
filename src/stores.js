var screens = {
    mobile: 350,
    tab: 600,
    computer: 1024,
    custom: 0
}

var constantStyles = {}
var smallWindowStyles = {}
var mediumWindowStyles = {}
var largeWindowStyles = {}
var customWindowStyles = {}

var HTMLInstance = {}

var animations = {}
var animationOptions = {}

var hoverStyles = {}
var activeStyles = {}
/**
 * reset all stores
 *
 */

function flush() {
    screens = {
        mobile: 450,
        tab: 900,
        computer: 1200,
        custom: 0
    }

    constantStyles = {}
    smallWindowStyles = {}
    mediumWindowStyles = {}
    largeWindowStyles = {}
    customWindowStyles = {}
    HTMLInstance = {}
    animations = {}
    animationOptions = {}
    hoverStyles = {}
    activeStyles = {}
}

module.exports = {
    screens,
    constantStyles,
    smallWindowStyles,
    mediumWindowStyles,
    largeWindowStyles,
    customWindowStyles,
    HTMLInstance,
    animations,
    animationOptions,
    hoverStyles,
    activeStyles,
    flush
}