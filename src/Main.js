import React from "react";
import Random from "./Paths/Random";
import Categories from "./Paths/Categories";
import SelectedCategory from "./Paths/SelectedCategory";
import {Switch, Route,} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        root: {
                background: 'linear-gradient(45deg, #1e88e5 40%, #e91e63 90%)',
                color: props => props.color,
        },
});

export default function Main(props) {

        const classes = useStyles(props);

return(
    <div className={classes.root}>
        <h2>MainContent</h2>
            <Switch>
                    <Route path="/" exact>
                            <h2>Welcome to Chuck Norris's best jokes</h2>
                    </Route>
                    <Route path="/category/:category">
                            <SelectedCategory></SelectedCategory>
                    </Route>
                    <Route path="/random" exact>
                            <Random></Random>
                    </Route>
                    <Route path="/categories">
                            <Categories></Categories>
                    </Route>
            </Switch>
        </div>
);
}