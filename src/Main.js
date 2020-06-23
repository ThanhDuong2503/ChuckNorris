import React from "react";
import Random from "./Paths/Random";
import Categories from "./Paths/Categories";
import SelectedCategory from "./Paths/SelectedCategory";
import {Switch, Route,} from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
        root: {
                background: 'linear-gradient(45deg, #007bb2 30%, #33ab9f 60%)',
                // color: props => props.color,
        },
});

export default function Main(props) {

        const classes = useStyles(props);

return(
    <div className={classes.root}>
            <Switch>
                    <Route path="/" exact>
                            <h2>Welcome to Chuck Norris's best jokes</h2>
                    </Route>
                    {/*Pfad in der URL im Browser Localhost:3000*/}
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