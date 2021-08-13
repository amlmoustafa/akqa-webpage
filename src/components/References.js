import {
  Box,
  Button,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const References = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Container className={classes.contentContainer}>
        <div className={classes.referenceBtn}>
          <ExpandMoreIcon />
        </div>
        <Typography variant="h6" className={classes.reference}>
          References
        </Typography>
      </Container>
    </Box>
  );
};

const useStyles = makeStyles(() => ({
  container: { padding: "50px 0", backgroundColor: "#E6E7E8" },
  contentContainer: { overflow: "hidden" },
  referenceBtn: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#00609C",
    color: "#fff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    float: "left",
    marginRight: 10,
    cursor: "pointer",
  },
  reference: {
    color: "#00609C",
    fontSize: 24,
    float: "left",
  },
}));

export default References;
