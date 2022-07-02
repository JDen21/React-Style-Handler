/**
 * funnel all testable variables here
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
import { flush } from './stores'


module.exports = {
    flush,
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