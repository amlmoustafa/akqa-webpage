import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import PlayVideo from "./PlayVideo";

const KOLVideos = () => {
  const classes = useStyles();
  return (
    <Container className={classes.videosContainer}>
      <Typography>KOL Videos - get expert insights here</Typography>
      <Typography>
        See what Key opinion leaders have to say about their experiences with
        Adtralza®
      </Typography>
      <Grid container>
        <Grid item xs={12} md={6}>
          <PlayVideo />
        </Grid>
        <Grid item xs={12} md={6}>
          <PlayVideo />
        </Grid>
        <Grid item xs={12} md={6}>
          <PlayVideo />
        </Grid>
        <Grid item xs={12} md={6}>
          <PlayVideo />
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  videosContainer: { backgroundColor: "gray" },
}));

export default KOLVideos;
