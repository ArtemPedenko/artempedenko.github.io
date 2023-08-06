import { Modal, Box } from "@mui/material";
import { YMaps, Map, ZoomControl } from 'react-yandex-maps';

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
  return (
    <Modal keepMounted open={props.open} onClose={props.close}>
      <Box sx={style}>
      </Box>
    </Modal>
  );
}
