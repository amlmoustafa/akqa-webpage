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
  Box,
} from "@material-ui/core";
import clinicalToolsI from "../assets/clinicalToolsI.svg";
import clinicalToolsII from "../assets/clinicalToolsII.jpg";
import { Link } from "@material-ui/icons";

const ClinicalTools = () => {
  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Container>
        <Typography className={classes.header} variant="h6">
          Clinical tools - at a glance
        </Typography>
        <Grid container className={classes.cardsContainer}>
          <Grid item xs={12} md={5}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.img}
                  component="img"
                  alt="Contemplative Reptile"
                  height="140"
                  image={clinicalToolsI}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    className={classes.header}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Dosing guide
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.description}
                  >
                    Adtralza® has a straightforward dosing regimen, with 150 mg
                    prefilled syringes(1).
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardContent}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.subText}
                >
                  Learn more about application and dosing
                </Typography>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} md={5}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  className={classes.img}
                  alt="Contemplative Reptile"
                  height="140"
                  image={clinicalToolsII}
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.cardContent}>
                  <Typography
                    className={classes.header}
                    gutterBottom
                    variant="h5"
                    component="h2"
                  >
                    Patient injection made simple
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.description}
                  >
                    This step by step video guide shows the patient how to self
                    inject using the two syringes that come in the Adtralza®
                    carton.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardContent}>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                  className={classes.subText}
                >
                  Watch the video
                </Typography>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  container: {
    padding: "80px 0",
  },
  cardsContainer: { justifyContent: "space-evenly" },
  header: {
    fontSize: 28,
    color: "#00609C",
    fontWeight: 400,
    marginBottom: 30,
  },
  card: {
    boxShadow: "none",
    backgroundColor: "#EEEEEE",
    borderRadius: 0,
    height: 563,
  },
  img: {
    height: "100%",
  },
  description: { fontSize: 16 },
  subText: { color: "#C017A2", fontSize: 16 },
  cardContent: { width: "80%", margin: "auto" },
}));
export default ClinicalTools;
