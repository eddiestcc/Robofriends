import React from "react";

const Scroll = (props) => {

    return(
        <div style={{overflow: "scroll", border: "solid", borderColor: "black", borderStyle: "solid" , height: "600px"}}>
            {props.children}
        </div>
    );
}

export default Scroll