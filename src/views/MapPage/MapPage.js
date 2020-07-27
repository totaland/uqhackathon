import React, { useState } from "react";
import { StaticMap } from "react-map-gl";
import DeckGL, { GeoJsonLayer, ArcLayer, MapView } from "deck.gl";
import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import CityInfo from "./city-info";
import ReactMapGL, {
  _MapContext as MapContext,
  NavigationControl,
  Popup,
} from "react-map-gl";
import CITIES from "./cities.json";
import Pins from "./pins";

import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import PersonIcon from "@material-ui/icons/Person";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { blue } from "@material-ui/core/colors";
import styled from "styled-components";
import "./map.css";

const emails = ["username@gmail.com", "user02@gmail.com"];
const useStyles = makeStyles({
  avatar: {
    backgroundColor: blue[100],
    color: blue[600],
  },
});
const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`;
const Deck = styled(DeckGL)``;
function SimpleDialog(props) {
  const classes = useStyles();
  const { onClose, selectedValue, open, city } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };
  console.log(city);
  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      {city && (
        <DialogTitle id="simple-dialog-title">
          {city.properties.name}
          <Typography>Wasted recycled: 100 ton</Typography>
        </DialogTitle>
      )}
    </Dialog>
  );
}

// Set your mapbox token here
const MAPBOX_TOKEN =
  "pk.eyJ1IjoidG90YWxhbmQiLCJhIjoiY2tjd3hmY2hiMGloZDJxczFqcnY4eGlxdiJ9.bbyY104Znuuc3kLcRbUvIg"; // eslint-disable-line

// source: Natural Earth http://www.naturalearthdata.com/ via geojson.xyz
const hospitals = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        name: "RBWH",
      },
      geometry: {
        type: "Point",
        coordinates: [153.02837780229257, -27.44662203771308],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Montserrat Day Hospitals",
      },
      geometry: {
        type: "Point",
        coordinates: [152.98251986580698, -27.417409893018192],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "Mater Private Hospital Brisbane",
      },
      geometry: {
        type: "Point",
        coordinates: [153.02755196396518, -27.486752564788347],
      },
    },
    {
      type: "Feature",
      properties: {
        name: "The Wesley Hospital",
      },
      geometry: {
        type: "Point",
        coordinates: [152.99763066174773, -27.47765964262413],
      },
    },
  ],
};
const COUNTRIES =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_50m_admin_0_scale_rank.geojson"; //eslint-disable-line
const AIR_PORTS =
  "https://d2ad6b4ur7yvpq.cloudfront.net/naturalearth-3.3.0/ne_10m_airports.geojson";
const INITIAL_VIEW_STATE = {
  latitude: -27.44662203771308,
  longitude: 153.02837780229257,
  zoom: 12,
  bearing: 0,
  pitch: 30,
};

function MapPage() {
  const [open, setOpen] = React.useState(false);
  const [city, setCIty] = React.useState(null);
  const [selectedValue, setSelectedValue] = React.useState(emails[1]);

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  const onClick = (info) => {
    console.log(info);
    setOpen(true);
    setCIty(info.object);
  };

  const layers = [
    new GeoJsonLayer({
      id: "hospitals",
      data: hospitals,
      // Styles
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getRadius: 0.1,
      getFillColor: [200, 0, 80, 180],
      // Interactive props
      pickable: true,
      autoHighlight: true,
      onClick,
    }),
  ];
  const [viewport, setViewport] = useState({
    latitude: 37.785164,
    longitude: -100,
    zoom: 8,
  });
  const style = {
    position: "relative",
  };
    const dashboardRoutes = [];

  return (
    <Div>

      <DeckGL
        ContextProvider={MapContext.Provider}
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={layers}
        width={500}
        height={500}
        id={"test-map"}
        style={style}
      >
        <SimpleDialog
          selectedValue={selectedValue}
          open={open}
          onClose={handleClose}
          city={city}
        />
        <MapView id="map" controller={true}>
          <StaticMap
            mapboxApiAccessToken={MAPBOX_TOKEN}
            mapStyle="mapbox://styles/mapbox/light-v9"
          />
        </MapView>
      </DeckGL>
    </Div>
  );
}

export default MapPage;

