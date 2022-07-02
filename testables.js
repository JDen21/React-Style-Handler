const {constantStyling, smallWindowStyling, mediumWindowStyling, largeWindowStyling, customWindowStyling} = require('./stylings')
const {screens, mediaQueryComponent} = require('./screens')

var constantStyles = {}
var smallWindowStyles = {}
var mediumWindowStyles = {}
var largeWindowStyles = {}
var customWindowStyles = {}

function styles(val) {

    const smallWindow = window.matchMedia(`(max-width : ${screens.mobile}px)`)
    const mediumWindow = window.matchMedia(`(max-width : ${screens.tab}px)`)
    const largeWindow = window.matchMedia(`(max-width : ${screens.computer}px)`)
    const customWindow = window.matchMedia(`max-width : ${screens.custom}px`)

    if (val === 'constant') {
        return constantStyles
    }
    if (smallWindow.matches) {
        return smallWindowStyles
    }

    if (mediumWindow.matches) {
        return mediumWindowStyles
    }

    if (largeWindow.matches) {
        return largeWindowStyles
    }

    if (customWindow.matches) {
        return customWindowStyles
    }

}

module.exports = {
    screens,
    styles,
    mediaQueryComponent,
    constantStyling,
    smallWindowStyling,
    mediumWindowStyling,
    largeWindowStyling,
    customWindowStyling
}