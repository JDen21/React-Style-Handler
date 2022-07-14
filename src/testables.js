/**
 * funnel all testable variables here
 * 
 * tested functions:
 * mediaQueryComponent
 */

import {constantStyling, smallWindowStyling, mediumWindowStyling, largeWindowStyling, customWindowStyling} from './screenedStylings'
import { mediaQueryComponent } from './screens'
import { screens, constantStyles, smallWindowStyles, mediumWindowStyles, largeWindowStyles, customWindowStyles, flush } from './stores'
import { styles } from './styleCall'
import { getHTMLInstance } from './domCalls'
import { setAnimationFrame, animateThis } from './animations'
import { hoverStyling, activeStyling } from './pseudoClassStylings'
import { hoverThis, activeThis } from './pseudoClassCalls'

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