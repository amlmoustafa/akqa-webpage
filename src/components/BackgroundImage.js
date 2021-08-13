import { makeStyles } from "@material-ui/core";
import React from "react";
import coverImage from "../assets/cover.png";
import adtralza from "../assets/adtralza.svg";

const BackgroundImage = () => {
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <div className={classes.coverImage}></div>
      <div className={classes.bgOverlay}>
        <div className={classes.contentWrapper}>
          <div className={classes.wrapperText}>
            <img src={adtralza} alt="adtralza" />
          </div>
          <div className={classes.coverImgContent}>
            <span>
              Adtralza® is a new treatment for adult patients with
              moderate-to-severe atopic dermatitis (eczema) who are candidates
              for systemic therapy.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => ({
  coverImage: {
    backgroundImage: "url(" + coverImage + ")",
    height: "70vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  imageContainer: {
    position: "relative",
  },
  bgOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    color: "#fff",
    display: "flex",
  },
  contentWrapper: {
    width: "80%",
    margin: "auto",
    fontSize: "x-large",
  },
  wrapperText: {
    marginBottom: 15,
  },
  coverImgContent: {
    width: "35%",
  },
}));

export default BackgroundImage;
