import React from "react";

const SearchBox = ({searchFuct}) => {
    return(
        <div className="pa2">
            <input onChange={searchFuct} className="pa3 ba b--green bg-lightest-blue" type="search" placeholder="search robots"></input>
        </div>
    )
};

export {SearchBox};