import {
  Container,
  Grid,
  makeStyles,
  Typography,
  Box,
} from "@material-ui/core";
import React from "react";
import imp1 from "../assets/imp1.svg";
import imp2 from "../assets/imp2.svg";
import imp3 from "../assets/imp3.svg";
import doubleBG from "../assets/doubleBG.svg";

const Improvements = () => {
  const classes = useStyles();
  return (
    <Box className={classes.improvementsContainer}>
      <Container className={classes.improvementsContentContainer}>
        <Grid container>
          <Grid item xs={12} md={4}>
            <img src={imp1} alt="imp pic" />
            <div className={classes.improvementsText}>
              <Typography className={classes.improvementsHeader} variant="h6">
                Long term sustained improvement
              </Typography>
              <Typography className={classes.improvementsDesc} variant="body2">
                9 out of 10 respondents experienced sustained disease control in
                clinical trials 10, providing sustained improvements in the
                burden of disease(1,2, 1, 8*†‡).
              </Typography>
              <Typography className={classes.improvementsLink} variant="body2">
                See efficacy and trial data
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <img src={imp2} alt="imp pic" />
            <div className={classes.improvementsText}>
              <Typography className={classes.improvementsHeader} variant="h6">
                Improvements in the burden of disease
              </Typography>
              <Typography className={classes.improvementsDesc} variant="body2">
                Patients in clinical trials saw an improvement in Quality of
                Life with early symptom relief and sustained improvements in
                burden of disease from week 16 to 32(12,13).
              </Typography>
              <Typography className={classes.improvementsLink} variant="body2">
                Learn more about quality of life improvements
              </Typography>
            </div>
          </Grid>

          <Grid item xs={12} md={4}>
            <img src={imp3} alt="imp pic" />
            <div className={classes.improvementsText}>
              <Typography className={classes.improvementsHeader} variant="h6">
                Good safety profile
              </Typography>
              <Typography className={classes.improvementsDesc} variant="body2">
                The overall frequency and severity of adverse events with
                Adtralza® were comparable to placebo at 16 weeks* and 52
                weeks(19).
              </Typography>
              <Typography className={classes.improvementsLink}>
                See safety profile
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
      <div className={classes.coverImage}></div>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  improvementsContainer: { position: "relative"},
  improvementsContentContainer: {
    position: "absolute",
    maxWidth: "fit-content",
    bottom: 80,
    textAlign: "center",
  },
  coverImage: {
    marginTop: 200,
    backgroundImage: "url(" + doubleBG + ")",
    height: 390,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  improvementsText: {
    width: "60%",
    margin: "auto",
  },
  improvementsHeader: {
    fontSize: 20,
    color: "#00609C",
    fontWeight: 500,
  },
  improvementsDesc: {
    fontSize: 16,
    margin: "10px 0",
  },
  improvementsLink: {
    color: "#C017A2",
    fontSize: 16,
    fontWeight: 600,
  },
}));

export default Improvements;
