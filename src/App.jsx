import "./styles.css";
import { useEffect } from "react";
import axios from "axios";
import { usePapaParse } from "react-papaparse";
import { useDispatch, useSelector } from "react-redux";
import { setData, setVisibleData } from "./store/slice";
import SearchBar from "./modules/SearchBar";
import ButtonBar from "./modules/ButtonBar";
import CityList from "./modules/CityList";
import { Box } from "@mui/material";

export default function App() {
  const dispatch = useDispatch();
  const { readString } = usePapaParse();
  const selectedData = useSelector((state) => state.cityWishList.selectedData);
  const visibleData = useSelector((state) => state.cityWishList.visibleData);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/curran/13d30e855d48cdd6f22acdf0afe27286/raw/0635f14817ec634833bb904a47594cc2f5f9dbf8/worldcities_clean.csv"
      )
      .then(function (response) {
        readString(response.data, {
          worker: true,
          complete: (results) => {
            const resData = results.data;
            console.log("useEffect1");
            resData.shift();
            dispatch(setData(resData));
          },
        });
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    console.log("useEffect2");
  }, [visibleData]);

  return (
    <Box sx={{ overflow: "auto" }}>
      {/* <SearchBar />
      <ButtonBar /> */}
      <CityList />
    </Box>
  );
}
