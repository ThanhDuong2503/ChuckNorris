import React, {useEffect, useState} from "react";
import ChuckCard from "../Card/ChuckCard";

export default function Random() {

    const [random, setRandom] = useState();

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then (response => response.json())
            .then (data => setRandom(data))
    },[] );

    return(
        <>
            {random && <ChuckCard jokeProps={random}></ChuckCard>  }
        </>
    )
}