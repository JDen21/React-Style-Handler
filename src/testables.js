/**
 * funnel all testable variables here
 * 
 * tested functions:
 * mediaQueryComponent
 */

import {constantStyling, smallWindowStyling, mediumWindowStyling, largeWindowStyling, customWindowStyling} from './screenedStylings'
import {screens, mediaQueryComponent} from './screens'
import {
    styles,
    constantStyles,
    smallWindowStyles,
    mediumWindowStyles,
    largeWindowStyles, 
    customWindowStyles
} from './styleCall'


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
    customWindowStyling
}