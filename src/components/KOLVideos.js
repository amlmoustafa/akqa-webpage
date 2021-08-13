import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import PlayVideo from "./PlayVideo";

const KOLVideos = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container className={classes.videosContainer}>
        <Typography className={classes.header} variant="h6">
          KOL Videos - get expert insights here
        </Typography>
        <Typography className={classes.description} variant="body2">
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
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6}>
            <PlayVideo />
          </Grid>
          <Grid item xs={12} md={6}>
            <PlayVideo />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: "80px 0",
    backgroundColor: "#EEEEEE",
  },
  header: {
    fontSize: 28,
    color: "#00609C",
    fontWeight: 400,
    marginBottom: 10,
  },
  description: { fontSize: 16 },

  videosContainer: {},
}));

export default KOLVideos;
