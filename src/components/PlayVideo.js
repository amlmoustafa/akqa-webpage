import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import videoPlay from "../assets/videoPlay.png";

const PlayVideo = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={videoPlay}
        title="Live from space album cover"
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="body1" variant="h5">
            Video title
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Short description of the contents or subject of the video. You can
            upload a screen from the video as thumbnail image
          </Typography>
        </CardContent>
        <div className={classes.controls}></div>
      </div>
    </Card>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    boxShadow: "none",
    border: "none",
    borderRadius: 0,
    margin: "40px 0",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#EEEEEE",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "100%",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default PlayVideo;
