import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

export default function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch("https://api.chucknorris.io/jokes/categories")
            .then (response => response.json())
            .then (data => setCategories(data))
    },[] );

return(
    <div>
        {categories.map(category => (
            <h2 key={category.id}>
                <Link to={`/category/${category}`}>{category}</Link>
            </h2>
        ))}
    </div>
)
}

