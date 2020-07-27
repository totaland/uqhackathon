import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import StoreIcon from '@material-ui/icons/Store';
import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";
import ApartmentIcon from '@material-ui/icons/Apartment';
import SchoolIcon from '@material-ui/icons/School';
import {Service} from '@styled-icons/remix-fill/Service';
import {Hospital} from '@styled-icons/fa-solid/Hospital';
import {RestoreFromTrash} from '@styled-icons/material/RestoreFromTrash';
import {HandHoldingMedical} from '@styled-icons/fa-solid/HandHoldingMedical';
import {University} from '@styled-icons/fa-solid/University';

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Our partners</h2>
          <h5 className={classes.description}>
          Help healthcare services turn operation cost into a revenue stream by recycling and repurposing their waste.
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Healthcare Service Providers"
              description="We support hospitals, clinics and community centres to optimise cost in waste management without interrupt their daily core activities."
              icon={Service}
              iconColor="rose"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Medical Equipment Suppliers"
              description="We provide networks to medical equipment suppliers with optimise resources and up to date technology in product innovation, which help to re-design medical equipment with a recyclable and sustainable nature."
              icon={HandHoldingMedical}
              iconColor="success"
              vertical
            />
          </GridItem>
            <GridItem xs={12} sm={12} md={6}>
            <InfoArea
              title="Waste Management Companies"
              description="We assist waste management companies to seize market opportunities with additional operating income. "
              icon={RestoreFromTrash}
              iconColor="info"
              vertical
            />
          </GridItem>
            <GridItem xs={12} sm={12} md={6}>
                <InfoArea
                    title="Academia and Research Institutions"
                    description="We bring talents and new start-ups to connect with industrial players and commercialise promising ideas in sustainability innovation."
                    icon={University}
                    iconColor="warning"
                    vertical
                />
            </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
