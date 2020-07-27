import MapGL, {
  Popup,
  NavigationControl,
  FullscreenControl,
  ScaleControl,
  GeolocateControl,
} from "react-map-gl";
import ReactMapGL from "react-map-gl";
import * as React from "react";
import { Component, useState } from "react";
import ControlPanel from "./control-panel";
import Pins from "./pins";
import CityInfo from "./city-info";
import CITIES from "./cities.json";

const TOKEN =
  "pk.eyJ1IjoidG90YWxhbmQiLCJhIjoiY2tjd3hmY2hiMGloZDJxczFqcnY4eGlxdiJ9.bbyY104Znuuc3kLcRbUvIg"; // Set your mapbox token here

const geolocateStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

const fullscreenControlStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

const navStyle = {
  position: "absolute",
  top: 72,
  left: 0,
  padding: "10px",
};

const scaleControlStyle = {
  position: "absolute",
  bottom: 36,
  left: 0,
  padding: "10px",
};

export default function MarkerPopUp() {
  const initialView = {
    latitude: 37.785164,
    longitude: -100,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
  };
  const [viewport, setState] = useState(initialView);
  const [popupInfo, setPopupInfo] = useState(null);

  const updateViewPort = (viewport) => {
    setState(viewport);
  };

  const onClickMarker = (city) => {
    setPopupInfo(city);
  };

  const renderPopup = () => {
    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => setPopupInfo(null)}
        >
          <CityInfo info={popupInfo} />
        </Popup>
      )
    );
  };
  return (
    <ReactMapGL
      width="100%"
      height="100%"
      mapStyle="mapbox://styles/mapbox/light-v9"
      // onViewportChange={updateViewPort}
      mapboxApiAccessToken={TOKEN}
    >
      {/*<Pins data={CITIES} onClick={this._onClickMarker} />

            {this._renderPopup()}

            <div style={geolocateStyle}>
                <GeolocateControl />
            </div>
            <div style={fullscreenControlStyle}>
                <FullscreenControl />
            </div>
            <div style={navStyle}>
                <NavigationControl />
            </div>
            <div style={scaleControlStyle}>
                <ScaleControl />
            </div>

            <ControlPanel containerComponent={this.props.containerComponent} />*/}
    </ReactMapGL>
  );
}
