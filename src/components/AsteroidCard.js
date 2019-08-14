import React, {useState, useEffect} from "react";
import axios from "axios";

function AsteroidCard() {
    const [asteroid, setAsteroid] = useState("");
    useEffect(() => {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
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
            <h1>{asteroid.title}</h1>
            <img src={asteroid.url} alt="NASA's Asteroid of the Day!"></img>
            <p>{asteroid.explanation}</p>
        </div>
    );
}

export default AsteroidCard;