const{ hoverStyles, activeStyles } = require('./stores.js') 

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