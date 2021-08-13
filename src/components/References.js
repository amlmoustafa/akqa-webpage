import {
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
    <Container>
      <Button size="small">
        <ExpandMoreIcon />
      </Button>
    </Container>
  );
};

const useStyles = makeStyles(() => ({}));

export default References;
