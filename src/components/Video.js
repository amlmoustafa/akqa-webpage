import {
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import videoThumbnail from "../assets/videoThumbnail.svg";

const Video = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography variant={"h6"}>
            Adtralza® neutralizes IL-13, a key driver of Atopic Dermatitis signs
            and symptoms.
          </Typography>
          <Typography variant={"body1"}>
            By specifically targeting the IL-13 cytokine, Adtralza® inhibits the
            interaction with type II receptors and prevents IL-13-induced
            inflammatory responses in the skin(1,2). Adtralza® selectively
            modulates the dysregulated immune system by(1): — Reducing markers
            of skin inflammation — Improving markers of skin barrier integrity —
            Reducing epidermal thickness
          </Typography>
          <Button variant="contained">Default</Button>
          <Typography variant={"body2"}>Duration: 2:43</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <img src={videoThumbnail} alt="videoThumbnail" />
          
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(() => ({}));

export default Video;
