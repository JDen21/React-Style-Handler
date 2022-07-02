var screens = {
    mobile : 450,
    tab : 900,
    computer : 1200,
    custom : 800
}

function mediaQueryComponent(args){
    screens.mobile = args[0]
    screens.tab = args[1]
    screens.computer = args[2]
    screens.custom = args[3]
}

module.exports = { screens, mediaQueryComponent }
