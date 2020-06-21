import React, {useEffect, useState} from "react";
import ChuckCard from "../Card/ChuckCard";
import {useParams} from "react-router";

export default function SelectedCategory({match}) {

    const [category, setCategory] = useState([]);

    useEffect(() => {
        fetch(`https://api.chucknorris.io/jokes/random?category=${match.categories}`)
            .then (response => response.json())
            .then (data => setCategory(data))
    },[] );

    return(
        <div>
            {category && <ChuckCard jokeProps={category}></ChuckCard>  }
        </div>
    )
}