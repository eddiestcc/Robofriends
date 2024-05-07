import React from "react";
import 'tachyons';

const Card = ({id, name, email}) => {
    return(
        <div id={id} className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <img alt="robot" src={`https://robohash.org/${id}?size=200x200`} ></img>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    )
};

export default Card;