import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../utils/index";
import { setVisibleData, setSearchingText } from "../store/slice";

let myInterval;

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  width: "80vw",
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
  const data = useSelector((state) => state.cityWishList.data);
  const selectedData = useSelector((state) => state.cityWishList.selectedData);
  const searchingText = useSelector(
    (state) => state.cityWishList.searchingText
  );
  const currentStatus = useSelector(
    (state) => state.cityWishList.currentStatus
  );

  function searchWrapper() {
    function searchFunc(filter) {
      console.log(filter);
      clearInterval(myInterval);
      if (currentStatus === "all") {
        dispatch(setVisibleData(search(data, filter)));
      } else if (currentStatus === "selected") {
        dispatch(setVisibleData(search(selectedData, filter)));
      }
    }
    return searchFunc;
  }

  const closureSearchingFunc = searchWrapper();

  function delaySearching(filter) {
    clearInterval(myInterval);
    dispatch(setSearchingText(filter));
    myInterval = setInterval(closureSearchingFunc, 1000, filter);
  }

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
          value={searchingText}
          placeholder="Search…"
          //inputProps={{ "aria-label": "search" }}
          onChange={(e) => delaySearching(e.target.value)}
        />
      </Search>
    </Box>
  );
}
