import { Box, InputBase, styled, Button } from "@mui/material";
import { setVisibleData, setCurrentList } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonAll() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cityWishList.data);
  return (
    <Button
      variant="contained"
      onClick={() => {
        dispatch(setVisibleData(data));
        dispatch(setCurrentList("all"));
      }}
    >
      All
    </Button>
  );
}
