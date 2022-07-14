/**
 * funnel all testable variables here
 * 
 * tested functions:
 * mediaQueryComponent
 */

const {constantStyling, smallWindowStyling, mediumWindowStyling, largeWindowStyling, customWindowStyling} = require('./screenedStylings.js') 
const { mediaQueryComponent } = require('./screens.js') 
const { screens, constantStyles, smallWindowStyles, mediumWindowStyles, largeWindowStyles, customWindowStyles, flush } = require('./stores.js') 
const { styles } = require('./styleCall.js') 
const { getHTMLInstance } = require('./domCalls.js') 
const { setAnimationFrame, animateThis } = require('./animations.js') 
const { hoverStyling, activeStyling } = require('./pseudoClassStylings.js') 
const { hoverThis, activeThis } = require('./pseudoClassCalls.js') 

module.exports = {
    screens,
    constantStyles,
    smallWindowStyles,
    mediumWindowStyles,
    largeWindowStyles,
    customWindowStyles,
    styles,
    mediaQueryComponent,
    constantStyling,
    smallWindowStyling,
    mediumWindowStyling,
    largeWindowStyling,
    customWindowStyling,
    flush,
    getHTMLInstance,
    setAnimationFrame,
    animateThis,
    hoverStyling,
    activeStyling,
    hoverThis,
    activeThis
}