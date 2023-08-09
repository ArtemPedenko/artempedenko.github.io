import { Modal, Box } from "@mui/material";
import GoogleMap from "./GoogleMap";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80vw",
  height: "80vh",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function MapModal(props) {
  const { open, close, lat, lng } = props;
  return (
    <Modal open={open} onClose={close}>
      <Box sx={style}>
        <GoogleMap latitude={lat} longitude={lng} />
      </Box>
    </Modal>
  );
}
