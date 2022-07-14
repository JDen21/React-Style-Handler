import { hoverStyles, activeStyles, HTMLInstance } from './stores'

function hoverThis(htmlName, hoverStyleName){
    if(Object.keys(hoverStyles).length === 0){ 
         console.error("you have no hover styling in effect")
         return
    }
    var savedKeys = []
    var savedValues = []
 
    for( const[key] of Object.entries(hoverStyles[hoverStyleName])){
         savedKeys.push(key)
         savedValues.push(HTMLInstance[htmlName].style[key] || null)
     }
      
     HTMLInstance[htmlName].addEventListener('mouseover', e=> {
         for( const[key, value] of Object.entries(hoverStyles[hoverStyleName])){
             HTMLInstance[htmlName].style[key] = value
         } 
     })
 
     HTMLInstance[htmlName].addEventListener('mouseout', e=> {
         for(var i = 0; i<savedKeys.length; i++){
             HTMLInstance[htmlName].style[savedKeys[i]] = savedValues[i]
         }
     })
 }

 function activeThis(htmlName, activeStyleName){
    if(Object.keys(activeStyles).length === 0){ 
        console.error("you have no hover styling in effect")
        return 
   }

    var savedKeys = []
    var savedValues = []
 
    for( const[key] of Object.entries(activeStyles[activeStyleName])){
         savedKeys.push(key)
         savedValues.push(HTMLInstance[htmlName].style[key] || null)
     }
      
     HTMLInstance[htmlName].addEventListener('mousedown', e=> {
         for( const[key, value] of Object.entries(activeStyles[activeStyleName])){
             HTMLInstance[htmlName].style[key] = value
         } 
     })
 
     HTMLInstance[htmlName].addEventListener('mouseup', e=> {
         for(var i = 0; i<savedKeys.length; i++){
             HTMLInstance[htmlName].style[savedKeys[i]] = savedValues[i]
         }
     })
}

module.exports = { hoverThis, activeThis }