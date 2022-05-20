

# set your media query points
    mediaQueryComponent([screenSizeSmall, screenSizeMedium, screenSizeLarge, screenSizeCustom])

# set styles that do not change 
    constantStyling({
        styleName : {
            'backgroundColor' : 'green'
        },
        styleName2 : {
            'backgroundColor' : 'orange'
        }
    })

## call your constant styles like this
    <h1 style={{ ...styles('constant').styleName }} >my h1 styled</h1>

# set styles depending on screen size
    smallWindowStyling()
    mediumWindowStyling()
    LargeWindowStyling()
    customWindowStyling()

## call your stylings the same way without the constant keyword 
     <p style= {{ ...styles().styleName2}} >paragraph styled</p>



# Example 
    import React from "react";
    import { styles, constantStyling, smallWindowStyling, mediaQueryComponent } from './styleHandler'

    export default function SampleComponent(){
        return (
            <div>
                <h1 style={{ ...styles('constant').styleh1 }} >my h1 styled</h1>
                <p style= {{...styles('constant').pStyle, ...styles().pStyle}} >paragraph styled</p>
            </div>
        )
    }

    <!-- setting query points -->
    mediaQueryComponent([450,700,1920,1000])


    constantStyling({
        pStyle : {
            'backgroundColor' : '#250E34',
            'color' : 'white'
        },
        styleh1 : {
            'color' : 'red',
            'backgroundColor' : 'yellow'
        } 
    })

    smallWindowStyling({
        pStyle : {
            'backgroundColor' : 'green'
        }
    })


