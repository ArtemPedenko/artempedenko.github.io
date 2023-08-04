import { Modal, Box } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 230,
  height: 230,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function MapModal(props) {
  return (
    <Modal keepMounted open={props.open} onClose={props.close}>
      <Box sx={style}>adsadasd</Box>
    </Modal>
  );
}
