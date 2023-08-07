import { Modal, Box } from "@mui/material";
import YandexMap from "./YandexMap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 800,
  zIndex: 1,
};
export default function MapModal(props) {
  const { open, close, lat, lng } = props;
  return (
    <>
      {open &&
        <Box sx={{ style }}>
          <YandexMap lat={lat} lng={lng} />
        </Box>}

    </>
  );
}
