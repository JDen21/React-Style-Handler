import {  constantStyles, smallWindowStyles, mediumWindowStyles, largeWindowStyles, customWindowStyles } from './stores'

function constantStyling(styleset){
    for(const [key, value] of Object.entries(styleset))
        constantStyles[key] = value
    
}

function smallWindowStyling(styleset){
    for(const [key, value] of Object.entries(styleset))
        smallWindowStyles[key] = value
    
}

function mediumWindowStyling(styleset){
    for(const [key, value] of Object.entries(styleset))
        mediumWindowStyles[key] = value
    
}

function largeWindowStyling(styleset){
    for(const [key, value] of Object.entries(styleset))
        largeWindowStyles[key] = value
}

function customWindowStyling(styleset){
    for(const [key, value] of Object.entries(styleset))
        customWindowStyles[key] = value
    
}

module.exports = {constantStyling, smallWindowStyling, mediumWindowStyling, largeWindowStyling, customWindowStyling }