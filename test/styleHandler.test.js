const { screens,styles, mediaQueryComponent, constantStyling, smallWindowStyling, mediumWindowStyling, largeWindowStyling, customWindowStyling } = require('../testables')


beforeAll(()=>{
    mediaQueryComponent([1,2,3,4])
    
    return
})

test('screen media query point setting',()=>{
    expect(screens.mobile).toBe(1)
    expect(screens.tab).toBe(2)
    expect(screens.computer).toBe(3)
    expect(screens.custom).toBe(4)
}) 

