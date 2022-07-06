/**
 * 
 * @param {string} HTMLName string name for dom element
 * @param { ref } val react ref name  
 */

 function getHTMLInstance(HTMLName, val) {

    HTMLInstance[HTMLName] = val.current
}

module.exports = { getHTMLInstance }