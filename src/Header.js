import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {useHistory} from "react-router";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 0,
    },
    menuButton: {
        marginRight: theme.spacing(10),
    },
    title: {
        flexGrow: 1,

    },
    switchButton: {
        marginLeft: theme.spacing(10),
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
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
            <AppBar color="primary" position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <Button color="secondary" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                            Menu
                        </Button>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>
                                    <Link to="/">Home</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/random">Random Joke</Link>
                                </MenuItem>
                                <MenuItem onClick={handleClose}>
                                    <Link to="/categories">Categories</Link>
                                </MenuItem>
                            </Menu>
                    </IconButton>

                    <Button className={classes.button} variant="contained" color="secondary" onClick={goBackHandle}> go back </Button>

                    <Typography variant="h2" className={classes.title}>
                        Chuck Norris Jokes
                    </Typography>

                    <Button className={classes.button} variant="contained" color="secondary" onClick={goForwardHandle}> go forward </Button>

                </Toolbar>
            </AppBar>
        </div>
    );
}