import React from 'react';
import "./ChuckCard.css";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    media: {
        height: 300,
    },
});

export default function ChuckCard(props) {

    const classes = useStyles();

    return (
        <Card className={"ChuckCard"}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://aisvip-a.akamaihd.net/themenarchiv/chuck-norris-bilder/3-1e1eaqaq/460x0/2325/chuck-norris-t2914.jpg"
                    title="ChuckNorris"
                    width="30%"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Joke Content
                    </Typography>
                    <Typography variant="body2" color="textPrimary" component="h3">
                        {props.jokeProps.categories}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.jokeProps.value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}