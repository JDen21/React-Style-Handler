Library for defining styles the same page of component. Capable of media queries too














# set your media query points 
### (I recommend you call this in your page component or App component)
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


# flush
    call this method to remove all your cached objects.
    For example, for every instance of constantStyling called, the object it takes is stored in variable.
    Call flush() to set these variables to its default state again
    example:
    flush

# getHTMLInstance
    this method takes in a react ref. This method is responsible for referencing your dom when doing animation and other stuffs.
    getHTMLInstance('domReferenceName', domRef)
    example:
    const divEl = useRef()
    getHTMLInstance('divElRef', divEl)   
### note: best to use in useRef or componentDidMount

# setAnimationFrame
    this function sets a name to an animation keyframes set
    this function takes in object or array. It works the same as css keyframes, only in js way
    this function takes in object containing animation options

    example keyframes:
    const keyframe1 = {
        from: {
            js css styling here
        },
        to: {
            js css styling here
        }
    }
    const keyframe2 = {
        '0%': {
            js css styling here
        },
        '5%': {
            js css styling here
        },
        '100%': {
            js css styling here
        }
    }

    const keyframe3 = [
        {
            js css styling here
        },
        {
            js css styling here
        }
    ]

    example options:
    const options = {
        duration: 2000,   //2 seconds
        iteration: 'Infinity'
    }

    example:
    setAnimationFrame('myFirstAnimationFrame', keyframe1, options)
### note: best to use in useRef or componentDidMount

# animateThis
    attaches animation keyframes to internal dom reference

    example:
    animateThis('domReferenceName', 'myFirstAnimationFrame')
### note: string inputs here are same as string arguments in getHTMLInstance and setAnimationFrame
### note: best to use in useRef or componentDidMount