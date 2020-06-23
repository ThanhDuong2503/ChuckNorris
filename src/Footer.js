import React from "react";
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #007bb2 30%, #33ab9f 60%)',
    },
});

export default function Footer(props) {

    const classes = useStyles(props);

    return(
        <div className="Footer">
    <p className={classes.root}>created on 21th June 2020</p>
        </div>
    );
}