import { Container, Grid, makeStyles, TextField, Box } from "@material-ui/core";
import React from "react";
import logo from "../assets/logo.svg";
import SearchIcon from "@material-ui/icons/Search";

const Header = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={6}>
            <img src={logo} alt={"logo"} />
          </Grid>
          <Grid item xs={12} md={6}>
            <form className={classes.searchForm} noValidate autoComplete="off">
              <TextField
                className={classes.searchField}
                id="outlined-basic"
                label="Search"
                variant="outlined"
              />
              <SearchIcon className={classes.searchIcon} />
            </form>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  container: { padding: "30px 0" },
  logo: { display: "inline" },
  searchForm: { textAlign: "center", position: "relative" },
  dermaLogo: { fontWeight: "bold" },
  worldLogo: { color: "#575757" },
  searchField: {
    [`& fieldset`]: {
      borderRadius: "50px",
      width: 300,
    },
  },
  searchIcon: { position: "absolute", color: "gray", margin: "17px 0 0 75px" },
}));

export default Header;
