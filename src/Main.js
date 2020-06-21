import React from "react";
import Random from "./Paths/Random";
import Categories from "./Paths/Categories";
import SelectedCategory from "./Paths/SelectedCategory";
import {Switch, Route,} from "react-router-dom";

export default function Main() {
return(
    <>
        <h2>MainContent</h2>
            <Switch>
                    <Route path="/" exact>
                            <h2>Welcome to Chuck Norris's best jokes</h2>
                    </Route>
                    <Route path="/random?category=:name">
                            <SelectedCategory></SelectedCategory>
                    </Route>
                    <Route path="/random" exact>
                            <Random></Random>
                    </Route>
                    <Route path="/categories">
                            <Categories></Categories>
                    </Route>
            </Switch>
        </>
);
}