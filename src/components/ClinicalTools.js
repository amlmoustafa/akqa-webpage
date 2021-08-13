import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Typography,
  Button,
  CardContent,
  CardMedia,
  CardActions,
  CardActionArea,
  Card,
  Grid,
} from "@material-ui/core";
import clinicalToolsI from "../assets/clinicalToolsI.svg";
import clinicalToolsII from "../assets/clinicalToolsII.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

const ClinicalTools = () => {
  const classes = useStyles();

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={clinicalToolsI}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Dosing guide
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Adtralza® has a straightforward dosing regimen, with 150 mg
                  prefilled syringes(1).
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Learn more about application and dosing
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Learn more about application and dosing
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                component="img"
                alt="Contemplative Reptile"
                height="140"
                image={clinicalToolsII}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  Patient injection made simple
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  This step by step video guide shows the patient how to self
                  inject using the two syringes that come in the Adtralza®
                  carton.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Watch the video
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ClinicalTools;
