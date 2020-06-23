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
                    image="http://images05.weekend.at/20120125_PD7929.HR.jpg/620x330/59.576.265"
                    title="ChuckNorris"
                />
                <CardContent>
                    <Typography variant="h5" color="inherit" component="h3">
                        {props.jokeProps.categories}
                    </Typography>
                    <Typography variant="body1" color="secondary" component="p">
                        {props.jokeProps.value}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );

}