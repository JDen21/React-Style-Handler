// styles
var screens = {
    mobile : 450,
    tab : 1000,
    computer : 1920,
    custom : 800
}

var constantStyles = {
    // pStyle : {
    //     'backgroundColor' : '#250E34',
    //     'color' : 'white'
    // }  
}

var smallWindowStyles = {
    pStyle : {
        'textAlign' : 'right',
    }    
}

var mediumWindowStyles =  {
    pStyle : {
        'textAlign' : 'center',
    }    
}

var largeWindowStyles = {
    pStyle : {
        'textAlign' : 'center',
    }    
}

var customWindowStyles = {
    pStyle : {
        'textAlign' : 'right',
    }    
}


function mediaQueryComponent(arr){
    screens.mobile = arr[0]
    screens.tab = arr[1]
    screens.computer = arr[2]
    screens.custom = arr[3]
}


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


function styles(val){

    const smallWindow = window.matchMedia(`(max-width : ${screens.mobile}px)`)
    const mediumWindow = window.matchMedia(`(max-width : ${screens.tab}px)`)
    const largeWindow = window.matchMedia(`(max-width : ${screens.computer}px)`)
    const customWindow = window.matchMedia(`max-width : ${screens.custom}px`)
 
    if(val === 'constant'){
        return constantStyles
    }
    if(smallWindow.matches){
        return smallWindowStyles
    }

    if(mediumWindow.matches){
        return mediumWindowStyles
    }

    if(largeWindow.matches){
        return largeWindowStyles
    }

    if(customWindow.matches){
        return customWindowStyles
    }
    
}

module.exports = { styles, mediaQueryComponent, constantStyling, smallWindowStyling, mediumWindowStyling, largeWindowStyling, customWindowStyling }