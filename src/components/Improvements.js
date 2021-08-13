import { Container, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import imp1 from "../assets/imp1.svg";
import imp2 from "../assets/imp2.svg";
import imp3 from "../assets/imp3.svg";

const Improvements = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4}>
          <img src={imp1} alt="imp pic" />
          <Typography variant="h6">Long term sustained improvement</Typography>
          <Typography variant="body2">
            9 out of 10 respondents experienced sustained disease control in
            clinical trials 10, providing sustained improvements in the burden
            of disease(1,2, 1, 8*†‡).{" "}
          </Typography>
          <Typography variant="body2">See efficacy and trial data </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img src={imp2} alt="imp pic" />
          <Typography variant="h6">
            Improvements in the burden of disease
          </Typography>
          <Typography variant="body2">
            Patients in clinical trials saw an improvement in Quality of Life
            with early symptom relief and sustained improvements in burden of
            disease from week 16 to 32(12,13).{" "}
          </Typography>
          <Typography variant="body2">
            Learn more about quality of life improvements{" "}
          </Typography>
        </Grid>

        <Grid item xs={12} md={4}>
          <img src={imp3} alt="imp pic" />
          <Typography variant="h6">Good safety profile</Typography>
          <Typography variant="body2">
            The overall frequency and severity of adverse events with Adtralza®
            were comparable to placebo at 16 weeks* and 52 weeks(19).{" "}
          </Typography>
          <Typography>See safety profile </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(() => ({}));

export default Improvements;
