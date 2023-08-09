import { Button, Tooltip, Typography } from "@mui/material";
import { setRandomCity } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";

export default function ButtonRandom() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cityWishList.data);

  return (
    <Tooltip
      title={
        <>
          <Typography color="inherit">
            You can click this button to see random city's streetview
          </Typography>
          <u>{"Notice!"}</u>. {"Not all cities are on Google streetview"}
        </>
      }
    >
      <Button
        variant="outlined"
        color="secondary"
        sx={{
          backgroundColor: "primary.main",
          borderColor: "primary.main",
        }}
        onClick={() =>
          dispatch(setRandomCity(data[Math.floor(Math.random() * data.length)]))
        }
      >
        random
      </Button>
    </Tooltip>
  );
}
