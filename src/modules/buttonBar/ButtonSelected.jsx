import { Box, InputBase, styled, Button, ToggleButton } from "@mui/material";
import { setVisibleData, setCurrentList } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonSelected() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.cityWishList.selectedData);
  return (
    <ToggleButton
      variant="contained"
      onClick={() => {
        dispatch(setVisibleData(selectedData));
        dispatch(setCurrentList("selected"));
      }}
    >
      Selected
    </ToggleButton>
  );
}
