import { Link, Typography } from "@material-ui/core";
import { Divider } from "@material-ui/core";
import { Container, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import leoLogo from "../assets/leo.svg";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footerContainer}>
      <Container>
        <Grid container>
          <Grid item xs={12} md={3}>
            <img src={leoLogo} alt="leo Logo" />
          </Grid>

          <Grid className={classes.footerLinksContainer} item xs={12} md={6}>
            <Link to={() => {}}>
              <Typography className={classes.footerLinks}>Contact</Typography>
              <Divider orientation="vertical" flexItem />
            </Link>
            <Link to={() => {}}>
              <Typography className={classes.footerLinks}>Imprint</Typography>
              <Divider orientation="vertical" flexItem />
            </Link>
            <Link to={() => {}}>
              <Typography className={classes.footerLinks}>
                Conditions
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Link>
            <Link to={() => {}}>
              <Typography className={classes.footerLinks}>
                Terms of use{" "}
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Link>
            <Link to={() => {}}>
              <Typography className={classes.footerLinks}>Privacy</Typography>
              <Divider orientation="vertical" flexItem />
            </Link>
            <Link to={() => {}}>
              <Typography className={classes.footerLinks}>
                Cookie content
              </Typography>
              <Divider orientation="vertical" flexItem />
            </Link>
          </Grid>

          <Grid item xs={12} md={3}>
            <Typography>© Copyright LEO Pharma 2020</Typography>
            <Typography>LEO and the LEO Lion Design</Typography>
            <Typography>are registered trademarks</Typography>
            <Typography>of LEO Pharma All rights reserved</Typography>
            <Typography>All rights reserved</Typography>
            <Typography>
              <Link onClick={() => {}}>LEO Pharma corporate website</Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  footerContainer: { backgroundColor: "#00609C" },
  footerLinksContainer: { display: "inline-flex" },
  footerLinks: { color: "#fff", borderRight: "1 solid #000" },
}));

export default Footer;
