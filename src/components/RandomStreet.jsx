import { Modal, Box } from "@mui/material";
import ReactStreetview from "react-streetview";
import { useSelector, useDispatch } from "react-redux";
import { setRandomStreetModal } from "../store/slice";

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

export default function RandomStreet() {
  const randomStreetModal = useSelector(
    (state) => state.cityWishList.randomStreetModal
  );
  const randomCity = useSelector((state) => state.cityWishList.randomCity);
  const latitude = +randomCity.lat;
  const longitude = +randomCity.lng;
  console.log(typeof latitude);

  const dispatch = useDispatch();
  const modalClose = () => dispatch(setRandomStreetModal(false));
  const streetViewPanoramaOptions = {
    position: { lat: latitude, lng: longitude },
  };
  return (
    <Modal open={randomStreetModal} onClose={modalClose}>
      <Box sx={style}>
        <ReactStreetview
          apiKey={"AIzaSyAohUTSKKv43mwxK4YhRIMntIkMfQLbj5Q"}
          streetViewPanoramaOptions={streetViewPanoramaOptions}
        />
      </Box>
    </Modal>
  );
}
