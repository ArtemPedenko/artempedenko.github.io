import GoogleMapReact from "google-map-react";
import ReactStreetview from "react-streetview";

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
    <div style={{ height: "800px", width: "800px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyAohUTSKKv43mwxK4YhRIMntIkMfQLbj5Q" }}
        defaultCenter={gMap.center}
        defaultZoom={gMap.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={options}
      >
        {/*  <ReactStreetview position={gMap.center} visible={true} /> */}
      </GoogleMapReact>
    </div>
  );
}
