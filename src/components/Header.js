import { Container, Grid, makeStyles, TextField, Typography } from "@material-ui/core";
import React from "react";

const Header = () => {
  const classes = useStyles();
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={6}>
          <Typography className={[classes.logo, classes.dermaLogo]}>
            DERMA
          </Typography>
          <Typography className={[classes.logo, classes.worldLogo]}>
            World
          </Typography>
          <Typography>By LEO Pharma</Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Outlined"
              variant="outlined"
            />
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

const useStyles = makeStyles(() => ({
  logo: { display: "inline" },
  dermaLogo: { fontWeight: "bold" },
  worldLogo: { color: "#575757" },
}));

export default Header;
