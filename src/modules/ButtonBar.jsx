import {
  ToggleButton,
  ToggleButtonGroup,
  styled,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { useEffect } from "react";
import {
  setVisibleData,
  setCurrentStatus,
  setRandomCity,
} from "../store/slice";
import { useSelector, useDispatch } from "react-redux";
import RandomStreet from "../components/RandomStreet";

const StyledButton = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: "#76168a",
  color: "white",
}));

export default function ButtonBar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cityWishList.data);
  const currentStatus = useSelector(
    (state) => state.cityWishList.currentStatus
  );
  const selectedData = useSelector((state) => state.cityWishList.selectedData);

  const handleChange = (event, newAlignment) => {
    dispatch(setCurrentStatus(newAlignment));
  };

  useEffect(() => {
    if (currentStatus === "all") dispatch(setVisibleData(data));
    if (currentStatus === "selected") dispatch(setVisibleData(selectedData));
  }, [currentStatus]);

  return (
    <Stack direction="row" gap={2} mt="5px">
      <ToggleButtonGroup
        exclusive
        value={currentStatus}
        onChange={handleChange}
        sx={{
          ".MuiToggleButton-root.Mui-selected": {
            backgroundColor: "#ba33d6",
            color: "white",
          },
        }}
      >
        <StyledButton value="all">all</StyledButton>
        <StyledButton value="selected">selected</StyledButton>
      </ToggleButtonGroup>
      <Button
        variant="outlined"
        color="secondary"
        sx={{ backgroundColor: "primary.main", borderColor: "primary.main" }}
        onClick={() =>
          dispatch(setRandomCity(data[Math.floor(Math.random() * data.length)]))
        }
      >
        random
      </Button>
      <RandomStreet />
    </Stack>
  );
}
