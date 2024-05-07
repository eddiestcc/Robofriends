import React from "react";

const Scroll = (props) => {

    return(
        <div 
        style={
            {overflow: "scroll", border: "solid", borderColor: "black", borderStyle: "solid" , width: "800px" , height: "600px" }
            }>
            {props.children}
        </div>
    );
}

export default Scroll