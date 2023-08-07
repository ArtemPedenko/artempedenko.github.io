import { Modal, Box } from "@mui/material";
import YandexMap from "./YandexMap";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function MapModal(props) {
  const { open, close, lat, lng } = props;
  return (
    <Modal keepMounted open={open} onClose={close}>
      <Box sx={style}>
        <YandexMap lat={lat} lng={lng} />
      </Box>
    </Modal>
  );
}
