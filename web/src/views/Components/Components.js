import React from "react";


// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "../../components/Header/Header.js";
import HeaderLinks from "../../components/Header/HeaderLinks.js";
import GridContainer from "../../components/Grid/GridContainer.js";
import GridItem from "../../components/Grid/GridItem.js";
import Parallax from "../../components/Parallax/Parallax.js";
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import Footer from "../../components/Footer/Footer.js";
import SectionDownload from "../../views/Components/Sections/SectionDownload.js";
import SectionContact from "../../views/Components/Sections/SectionContact.js";


import styles from "../../assets/jss/material-kit-react/views/components.js";
import Button from "../../components/CustomButtons/Button.js";
import ReactWhatsapp from 'react-whatsapp';

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;


  return (
    <div>
      <Header
        brand="Crab-Recycling"
        rightLinks={<HeaderLinks />}
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image="https://i.ibb.co/zSjrVWg/Fondo.jpg">
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>Material Kit React.</h1>
                <h3 className={classes.subtitle}>
                  A Badass Material-UI Kit based on Material Design.
                </h3>
                <ReactWhatsapp number="573209048264" message="¡Hola! Me interesó sus servicios.">
                  <Button color="success">
                    <i className={classes.socials + " fab fa-whatsapp"} />
                    Conctato

                  </Button>
                </ReactWhatsapp>

              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionContact />
        <SectionDownload />
      </div>
      <Footer />
    </div>


  );
}
