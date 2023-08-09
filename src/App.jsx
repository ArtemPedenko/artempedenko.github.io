import "./styles.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityDataRequest } from "./store/slice";
import CityList from "./modules/CityList";
import { Box } from "@mui/material";
import ButtonBar from "./modules/ButtonBar";
import SearchBar from "./modules/SearchBar";

export default function App() {
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cityWishList.data);
  const currentStatus = useSelector(
    (state) => state.cityWishList.currentStatus
  );
  const selectedData = useSelector((state) => state.cityWishList.selectedData);

  useEffect(() => {
    dispatch(getCityDataRequest());
  }, []);

  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <Box sx={{ position: "relative" }}>
          <SearchBar />
          <Box sx={{ position: "relative" }}>
            <ButtonBar />
          </Box>
        </Box>
        {currentStatus === "all" ? (
          <CityList visibleData={data} />
        ) : (
          <CityList visibleData={selectedData} />
        )}
      </Box>
    </>
  );
}
