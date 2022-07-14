const {  screens,constantStyles, smallWindowStyles, mediumWindowStyles, largeWindowStyles, customWindowStyles } = require('./stores.js') 

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

module.exports = { styles }