import { Modal, Box } from "@mui/material";
import YandexMap from "./YandexMap";
import GoogleMap from "./GoogleMap";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  height: "800px",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

//<>
//      {open && (
//        <Box sx={{ style }}>
//          {/*  <YandexMap lat={lat} lng={lng} /> */}
//          <GoogleMap lat={lat} lng={lng} />
//        </Box>
//      )}
//    </>

export default function MapModal(props) {
  const { open, close, lat, lng } = props;
  return (
    <Modal
      open={open}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <GoogleMap latitude={lat} longitude={lng} />
      </Box>
    </Modal>
  );
}
