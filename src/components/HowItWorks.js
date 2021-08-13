import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import image from "../assets/adtralzaHowItWorks.svg";
import doubleBG from "../assets/doubleBG.svg";

const HowItWorks = () => {
  const classes = useStyles();
  return (
    <Box className={classes.howItWorksContainer}>
      <Container className={classes.howItWorksContentContainer}>
        <Grid container className={classes.container}>
          <Grid item xs={12} md={6}>
            <img src={image} alt="how it works" />
          </Grid>
          <Grid className={classes.learnMoreContainer} item xs={12} md={6}>
            <Typography className={classes.howItWorksContent}>
              It is the first and only biologic developed to specifically
              neutralize IL-13, a key driver of atopic dermatitis signs and
              symptoms(1,2)
            </Typography>
            <Typography className={classes.learnMoreText}>
              Learn more about how Adtralza® works and how to use it in
              treatment.
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.coverImage}></div>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  howItWorksContainer: { position: "relative" },

  container: { width: "75%", margin: "0 auto" },

  howItWorksContentContainer: {
    position: "absolute",
    bottom: 20,
    maxWidth: "fit-content",
  },

  coverImage: {
    marginTop: 200,
    backgroundImage: "url(" + doubleBG + ")",
    height: "30vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },

  learnMoreContainer: {
    marginTop: 35,
  },

  learnMoreText: { marginTop: 25, fontSize: 18 },

  howItWorksContent: {
    fontSize: 28,
    color: "#00609C",
    fontWeight: 600,
    lineHeight: "130%",
  },
}));

export default HowItWorks;
