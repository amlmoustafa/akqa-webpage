import { makeStyles } from "@material-ui/core";
import React from "react";

const MainMenu = () => {
  const classes = useStyles();
  return <div className={classes.mainMenu}></div>;
};

const useStyles = makeStyles(() => ({
  logo: { display: "inline" },
  dermaLogo: { fontWeight: "bold" },
  worldLogo: { color: "#575757" },
}));

export default MainMenu;
