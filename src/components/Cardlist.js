import React from "react";
import Card from './Card.js';

const Cardlist = ({robots}) => {

    let cardArray = robots.map((robot) => {
            return <Card id={robot.id} name={robot.name} email={robot.email} />
        });
    return(
        <div>
           {cardArray}
        </div>
    );
};

export {Cardlist};