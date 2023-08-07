import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import { usePapaParse } from "react-papaparse";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  getCityDataRequest,
  getCityDataSuccess,
  setCurrentStatus
} from "./store/slice";
import CityList from "./modules/CityList";
import { Box } from "@mui/material";
import { YMaps, Map, ZoomControl } from "react-yandex-maps";

export default function App() {
  const dispatch = useDispatch();
  const { readString } = usePapaParse();
  const searchingText = useSelector(
    (state) => state.cityWishList.searchingText
  );
  const data = useSelector((state) => state.cityWishList.data);
  const unparsedData = useSelector((state) => state.cityWishList.unparsedData);
  const currentStatus = useSelector((state) => state.cityWishList.currentStatus);
  const selectedData = useSelector((state) => state.cityWishList.selectedData);


  useEffect(() => {
    dispatch(getCityDataRequest());
  }, []);



  //useEffect(() => {
  //}, [searchingText]);

  return (
    <>
      <Box sx={{ overflow: "auto" }}>
        {currentStatus === "all" && <CityList visibleData={data} />}
        {currentStatus === "selected" && <CityList visibleData={selectedData} />}
      </Box>
    </>
  );
}
