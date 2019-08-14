import React, {useState, useEffect} from "react";
import axios from "axios";
import TestCard from "./TestCard.js";

function AsteroidCard() {
    const [asteroid, setAsteroid] = useState("");
    useEffect(() => {
        axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(res => {
            console.log(res);
            setAsteroid(res.data);
        })
        .catch(err => 
            console.log(err)
        )
    }, [])
    return (
        <div>
            <TestCard asteroidProps={asteroid}/>
        </div>
    );
}

export default AsteroidCard;