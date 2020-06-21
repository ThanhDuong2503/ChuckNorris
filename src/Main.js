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
                    <Route exact path="/">
                            <h2>Welcome to Chuck Norris's best jokes</h2>
                    </Route>
                    <Route exact path="/random">
                            <Random></Random>
                    </Route>
                    <Route path="/categories">
                            <Categories></Categories>
                    </Route>
                    <Route path="/random/:id">
                            <SelectedCategory></SelectedCategory>
                    </Route>
            </Switch>
        </>
);
}