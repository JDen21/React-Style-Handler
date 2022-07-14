import { hoverStyles, activeStyles } from './stores'

function hoverStyling(styleset){
    for(const [key, value] of Object.entries(styleset)){
        hoverStyles[key] = value
    }
}

function activeStyling(styleset){
    for(const [key, value] of Object.entries(styleset)){
        activeStyles[key] = value
    }
}

module.exports = {hoverStyling, activeStyling}