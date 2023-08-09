import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../utils/index";
import { setVisibleData, setSearchingText } from "../store/slice";

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
  const currentStatus = useSelector(
    (state) => state.cityWishList.currentStatus
  );
  function searchFunc(filter) {
    dispatch(setSearchingText(filter));
    if (currentStatus === "all") {
      dispatch(setVisibleData(search(data, filter)));
    } else if (currentStatus === "selected") {
      dispatch(setVisibleData(search(selectedData, filter)));
    }
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
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => searchFunc(e.target.value)}
        />
      </Search>
    </Box>
  );
}
