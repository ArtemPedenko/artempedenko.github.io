import { Box, InputBase, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ButtonBar from "./ButtonBar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { search } from "../utils/index";
import { setSearchingText, setVisibleData } from "../store/slice";

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
  const searchingText = useSelector(
    (state) => state.cityWishList.searchingText
  );
  const data = useSelector((state) => state.cityWishList.data);

  useEffect(() => {
    dispatch(setVisibleData(search(data, searchingText)));
  }, [searchingText]);

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
          onChange={(e) => dispatch(setSearchingText(e.target.value))}
        />
      </Search>
    </Box>
  );
}
