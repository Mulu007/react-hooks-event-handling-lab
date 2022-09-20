// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe () {
    const handleFocus = () => {console.log("Good!")}
    const handleBlur = () => {console.log("Hey! Eyes on me!")}
    return (<button Focus = {handleFocus} Blur = {handleBlur} > Eyes on me </button>)
}

export default EyesOnMe;