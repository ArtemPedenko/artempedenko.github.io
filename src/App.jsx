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
import { YMaps, Map, ZoomControl } from 'react-yandex-maps';


export default function App() {
  const dispatch = useDispatch();
  const { readString } = usePapaParse();
  const selectedData = useSelector((state) => state.cityWishList.selectedData);
  const visibleData = useSelector((state) => state.cityWishList.visibleData);
  const searchingText = useSelector((state) => state.cityWishList.searchingText);



  useEffect(() => {
    console.log("useEffect1")
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
          },
        });
      })
      .catch(function (error) {
        console.log("error");
        console.log(error);
      });
  }, []);

  useEffect(() => {
    //console.log("useEffect2");
  }, [searchingText]);

  return (
    <>
      <Box sx={{ overflow: "auto" }}>
        <CityList />
      </Box>
      <YMaps query={{ apikey: "e44dac90-043e-402c-8f0d-01fcbf571ff5" }}>
        <Map
          width="1000px"
          height="500px"
          defaultState={{ center: [55.74, 37.62], zoom: 11 }}>
          <ZoomControl />
        </Map>
      </YMaps>
    </>
  );
}
