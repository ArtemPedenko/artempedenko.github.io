import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import { usePapaParse } from "react-papaparse";
import { useDispatch, useSelector } from "react-redux";
import {
  setData,
  setVisibleData,
  getCityDataRequest,
  getCityDataSuccess,
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
  const unparsedData = useSelector((state) => state.cityWishList.unparsedData);

  useEffect(() => {
    //dispatch(getCityDataRequest());
    axios
      .get(
        "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv"
      )
      .then(function (response) {
        readString(response.data, {
          header: true,
          worker: true,
          complete: (results) => {
            const resData = results.data;
            dispatch(setData(resData));
            dispatch(setVisibleData(resData));
          },
        });
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      });
  }, []);

  useEffect(() => {}, [searchingText]);

  return (
    <>
      <Box sx={{ overflow: "auto" }}>
        <CityList />
      </Box>
    </>
  );
}
