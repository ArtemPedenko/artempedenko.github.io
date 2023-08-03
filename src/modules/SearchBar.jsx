import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonBar from "./ButtonBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../utils/index";
import {
  setVisibleDataCopy,
  setVisibleData,
  setSearchingText,
} from "../store/slice";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "100%",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export default function SearchBar() {
  const dispatch = useDispatch();
  //const searchingText = useSelector(
  //  (state) => state.cityWishList.searchingText
  //);
  const visibleData = useSelector((state) => state.cityWishList.visibleData);
  const visibleDataCopy = useSelector(
    (state) => state.cityWishList.visibleDataCopy
  );
  function searchFunc(searchingText) {
    console.log("searchingText = " + searchingText.length);
    if (searchingText.length === 0) {
      console.log("ya tut");
      dispatch(setVisibleDataCopy(visibleData));
      dispatch(setVisibleData(visibleDataCopy));
      console.log(visibleDataCopy);
    } else {
      console.log(visibleDataCopy);
      dispatch(setVisibleData(search(visibleData, searchingText)));
    }
  }
  //useEffect(() => {
  //  console.log("searchingText = " + searchingText);
  //  if (searchingText === "") {
  //    console.log("searchingText raven 0");
  //    dispatch(setVisibleDataCopy(visibleData));
  //    dispatch(setVisibleData(visibleDataCopy));
  //    console.log(visibleDataCopy);
  //  }
  //  console.log(visibleDataCopy);
  //  dispatch(setVisibleData(search(visibleData, searchingText)));
  //}, [searchingText]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Search>
        <SearchIconWrapper>
          <SearchIcon color="secondary" sx={{ zIndex: 1 }} />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => searchFunc(e.target.value)}
        />
      </Search>
    </Box>
  );
}
