import React from "react";
import "./Footer.css";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        background: 'linear-gradient(45deg, #1e88e5 40%, #e91e63 90%)',
        color: props => props.color,
    },
});

export default function Footer(props) {

    const classes = useStyles(props);

    return(
    <p className={classes.root}>created on 21th June 2020</p>
    );
}