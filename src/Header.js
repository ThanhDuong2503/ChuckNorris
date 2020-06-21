import React from "react";
import "./Header.css";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useHistory} from "react-router";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(20),
    },
    title: {
        flexGrow: 1,
    },
    switchButton: {
        marginLeft: theme.spacing(20),
    },
}));

export default function Header() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const history = useHistory();
    function goBackHandle(){
        history.goBack();
    }
    function goForwardHandle(){
        history.goForward();
    }

    return(
        <div className={classes.root}>
            <AppBar className={"Header"} position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Button color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Menu
                        </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Home</MenuItem>
                                <MenuItem onClick={handleClose}>Random Joke</MenuItem>
                                <MenuItem onClick={handleClose}>Categories</MenuItem>
                            </Menu>
                    </IconButton>

                    <button onClick={goBackHandle}> go back </button>

                    <Typography variant="h3" className={classes.title}>
                        Chuck Norris Jokes
                    </Typography>

                    <button onClick={goForwardHandle}> go forward </button>

                    <Button className={classes.switchButton} color="inherit">Switch Mode</Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}