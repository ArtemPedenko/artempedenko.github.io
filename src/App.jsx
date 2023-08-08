import "./styles.css";
import { useEffect } from "react";
import { usePapaParse } from "react-papaparse";
import { useDispatch, useSelector } from "react-redux";
import { getCityDataRequest } from "./store/slice";
import CityList from "./modules/CityList";
import { Box } from "@mui/material";

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
      <Box sx={{ overflow: "auto" }}>
        {/* {currentStatus === "all" && <CityList visibleData={data} />}
        {currentStatus === "selected" && (
          <CityList visibleData={selectedData} />
        )} */}

        {currentStatus === "all" ? (
          <CityList visibleData={data} />
        ) : (
          <CityList visibleData={selectedData} />
        )}
      </Box>
    </>
  );
}
