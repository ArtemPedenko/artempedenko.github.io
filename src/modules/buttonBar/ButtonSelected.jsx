import { Box, InputBase, styled, Button } from "@mui/material";
import { setVisibleData } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonSelected() {
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.cityWishList.selectedData);
  return (
    <Button
      variant="contained"
      onClick={() => dispatch(setVisibleData(selectedData))}
    >
      Selected
    </Button>
  );
}
