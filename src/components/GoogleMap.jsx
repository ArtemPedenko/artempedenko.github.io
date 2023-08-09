// api key second variant "AIzaSyB0pAAfd-SgsJm0w0hvzZfg90qfXoPN9bw"

import GoogleMapReact from "google-map-react";

export default function GoogleMap(props) {
  const { latitude, longitude } = props;
  const gMap = {
    center: {
      lat: +latitude,
      lng: +longitude,
    },
    zoom: 11,
  };

  const options = {
    zoomControl: true,
    mapTypeControl: true,
    scaleControl: true,
    streetViewControl: true,
    rotateControl: true,
    fullscreenControl: true,
  };

  return (
    <div style={{ height: "80vh", width: "80vw" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAohUTSKKv43mwxK4YhRIMntIkMfQLbj5Q" }}
        defaultCenter={gMap.center}
        defaultZoom={gMap.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={options}
      ></GoogleMapReact>
    </div>
  );
}
