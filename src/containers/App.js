import React, { useState, useEffect } from "react";
import {Cardlist} from '../components/Cardlist.js'
import './css/app.css'
import {SearchBox} from '../components/searchbox.js';
import Scroll from "../components/Scroll.js";

const App = () => {

    const [users, setUsers] = useState([]);
    const [robotList, setRobotList] = useState([]);

    useEffect(() => {fetch('https://jsonplaceholder.cypress.io/users')
        .then(response => response.json())
        .then(users => setUsers(users))
    }, [])

    useEffect(() => {
        setRobotList(users)
    }, [users]);

    const searchFuct = (e) => {
       const filteredRobots = users.filter(robot => {
            return robot.name.toLowerCase().includes(e.target.value.toLowerCase());
        });
        setRobotList(filteredRobots);
    }
    return !robotList.length ?  
        (
            <div className="tc">
                <h1 className="title f1 lh-title">Waiting on friends...</h1>
                <SearchBox searchFuct={searchFuct}/>
                <Scroll>
                    <Cardlist robots={robotList} />
                </Scroll>
            </div>
        ) :
        (
        <div className="tc">
            <h1 className="title f1 lh-title">RoboFriends</h1>
            <SearchBox searchFuct={searchFuct}/>
            <Scroll>
                <Cardlist robots={robotList} />
            </Scroll>
        </div>
         );
}

export {App}