

/**
 * 
 * @param { string } animationName keyframe name 
 * @param {object, array} keyframe 
 * can be array if unnamed frames
 * can be object with properties from and to values are animation frame
 * can be object with string value percent properties
 * @param { object } options set of options for the array
 * iteration
 * duration
 * @returns null
 */


function setAnimationFrame(animationName, keyframe, options) {
    const percentCheck = /\d+(?=%)/
    let proceeding = true
    var keyframeSet = []

    animationOptions[animationName] = options

    if(Array.isArray(keyframe)){
        animations[animationName] = keyframe
        return
    }

    if (typeof keyframe === 'object') {
        if (Object.keys(keyframe).includes('from') && Object.keys(keyframe).includes('to') && Object.keys(keyframe).length === 2){
            Object.keys(keyframe).forEach(el => {
                keyframeSet.push(keyframe[el])
            })
            animations[animationName] = keyframeSet
            return
        } 
            

        Object
            .keys(keyframe)
            .forEach(el => {
                if (!percentCheck.test(el)) {
                    console.error('invalid key: ' + el)
                    proceeding = false
                    return
                }

                if (parseInt(el.substring(0, el.length - 1)) < 0 && parseInt(el.substring(0, el.length - 1)) > 100) {
                    console.error('key ' + el + ' must be within 0-100')
                    proceeding = false
                    return
                }
                keyframe[el]['offset'] = (parseInt(el.substring(0, el.length - 1)) / 100).toString()
            })
        if (!proceeding) 
            return
        else {
            Object.keys(keyframe).forEach(el => {
                keyframeSet.push(keyframe[el])
            })
            animations[animationName] = keyframeSet
        }
            
    }

}


/**
 * 
 * @param {string} htmlName dom reference name
 * @param {string} keyframeName animation frame reference name
 */
function animateThis(htmlName, keyframeName){
    HTMLInstance[htmlName].animate(animations[keyframeName], animationOptions[keyframeName])
    
}

module.exports = {
    setAnimationFrame,
    animateThis
}
