import { Modal, Box } from "@mui/material";
import { YMaps, Map } from '@pbe/react-yandex-maps';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 1200,
  height: 1200,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MapModal(props) {
  return (
    <Modal keepMounted open={props.open} onClose={props.close}>
      <Box sx={style}> 
      <YMaps>
    <div>
      My awesome application with maps!
      <Map defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps></Box>
    </Modal>
  );
}
