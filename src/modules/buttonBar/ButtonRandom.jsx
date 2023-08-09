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
          <Typography color="inherit">Tooltip with HTML</Typography>
          <em>{"And here's"}</em> <b>{"some"}</b> <u>{"amazing content"}</u>.{" "}
          {"It's very engaging. Right?"}
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
