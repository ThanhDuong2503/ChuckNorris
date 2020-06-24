import React, {useEffect, useState} from "react";
import ChuckCard from "../Card/ChuckCard";
import {useParams} from "react-router";

export default function SelectedCategory() {

    const [category, setCategory] = useState([]);

    const params = useParams();

    useEffect(() => {
        // fetch-Pfad in der URL im Browser
        fetch(`https://api.chucknorris.io/jokes/random?category=${params.category}`)
            .then (response => response.json())
            .then (data => setCategory(data))
    },[params.category] );

    return(
        <div>
            {category && <ChuckCard jokeProps={category}></ChuckCard>  }
        </div>
    )
}