import React from "react";

function TestCard(props) {
    return (
        <div>
            <h1>{props.asteroidProps.title}</h1>
            <img src={props.asteroidProps.url} alt="NASA's Asteroid of the Day!"></img>
            <p>{props.asteroidProps.explanation}</p>
        </div>
    )
}

export default TestCard;