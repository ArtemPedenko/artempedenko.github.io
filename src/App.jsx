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
  const searchingText = useSelector(
    (state) => state.cityWishList.searchingText
  );
  const visibleData = useSelector((state) => state.cityWishList.visibleData);

  useEffect(() => {
    dispatch(getCityDataRequest());
  }, []);

  const renderElement = () => {
    if (searchingText !== "") {
      return <CityList visibleData={visibleData} />;
    } else if (currentStatus === "all") {
      return <CityList visibleData={data} />;
    } else if ((<CityList visibleData={selectedData} />)) {
      return <CityList visibleData={selectedData} />;
    }
    return null;
  };

  return (
    <>
      <Box sx={{ overflow: "hidden" }}>
        <Box sx={{ position: "relative" }}>
          <SearchBar />
        </Box>
        <Box sx={{ position: "relative" }}>
          <ButtonBar />
        </Box>
        {renderElement()}
      </Box>
    </>
  );
}
