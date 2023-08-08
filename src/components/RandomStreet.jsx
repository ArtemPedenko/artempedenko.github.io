import { Modal, Box } from "@mui/material";
import ReactStreetview from "react-streetview";

export default function RandomStreet(props) {
  return <ReactStreetview position={gMap.center} visible={true} />;
}
