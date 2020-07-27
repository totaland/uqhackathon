import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

import lusi from "assets/img/faces/lusi.jfif";
import cheah from "assets/img/faces/cheah.jfif";
import renee from "assets/img/faces/renee.jfif";
import james from "assets/img/faces/james.png";
import xin from "assets/img/faces/xin.jfif";
import silvie from "assets/img/faces/silvie.jfif";
import candice from "assets/img/faces/candice.jfif";

const useStyles = makeStyles(styles);

export default function TeamSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>Our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={lusi} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Lusi Ou
                <br />
                <small className={classes.smallTitle}>CFO</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={cheah} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Cheah Zhong Xiang
                <br />
                <small className={classes.smallTitle}>CEO</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={xin} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Xin
                <br />
                <small className={classes.smallTitle}>COO</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={james} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                James Nguyen
                <br />
                <small className={classes.smallTitle}>CTO</small>
              </h4>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img src={renee} alt="..." className={imageClasses} />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Renee Lin
                <br />
                <small className={classes.smallTitle}>CIO</small>
              </h4>
            </Card>
          </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={silvie} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                        Silvie Ketelaars
                        <br />
                        <small className={classes.smallTitle}>CMO</small>
                    </h4>
                </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
                <Card plain>
                    <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                        <img src={candice} alt="..." className={imageClasses} />
                    </GridItem>
                    <h4 className={classes.cardTitle}>
                        Candice
                        <br />
                        <small className={classes.smallTitle}>CIO</small>
                    </h4>
                </Card>
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
