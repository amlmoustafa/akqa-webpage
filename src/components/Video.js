import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import videoThumbnail from "../assets/videoThumbnail.svg";

const Video = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <Typography className={classes.header} variant={"h6"}>
              Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis
              signs and symptoms.
            </Typography>
            <Typography variant={"body1"}>
              By specifically targeting the IL-13 cytokine, Adtralza® inhibits
              the interaction with type II receptors and prevents IL-13-induced
              inflammatory responses in the skin(1,2).
            </Typography>
            <Typography className={classes.marginTopBottom} variant={"body1"}>
              Adtralza® selectively modulates the dysregulated immune system
              by(1):
            </Typography>
            <Typography variant={"body2"}>
              — Reducing markers of skin inflammation
            </Typography>
            <Typography variant={"body2"}>
              — Improving markers of skin barrier integrity
            </Typography>
            <Typography className={classes.marginBottom} variant={"body2"}>
              — Reducing epidermal thickness
            </Typography>

            <Button className={classes.watchVideoBtn} variant="contained">
              Watch the video
            </Button>
            <Typography variant={"body2"}>Duration: 2:43</Typography>
          </Grid>
          <Grid className={classes.imgContainer} item xs={12} md={9}>
            <img
              className={classes.img}
              src={videoThumbnail}
              alt="videoThumbnail"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: "100px 0 30px",
    backgroundColor: "#EEEEEE",
    border: "1px solid",
  },
  header: {
    fontSize: 28,
    color: "#00609C",
    fontWeight: 500,
    lineHeight: "33px",
    marginBottom: 20,
  },
  imgContainer: { display: "flex", justifyContent: "center" },
  img: { width: 700 },
  marginTopBottom: { margin: "20px 0" },
  marginBottom: { marginBottom: 20 },
  watchVideoBtn: {
    backgroundColor: "#C017A2",
    color: "#fff",
    fontSize: 20,
    fontWight: 600,
    borderRadius: 100,
    marginBottom: 25,
    textTransform: "none",
  },
}));

export default Video;
