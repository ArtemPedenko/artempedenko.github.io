import {
  ToggleButton,
  ToggleButtonGroup,
  styled,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import { useEffect } from "react";
import { setVisibleData, setCurrentList } from "../store/slice";
import { useSelector, useDispatch } from "react-redux";

const StyledButton = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: "#76168a",
  color: "white",
}));

export default function ButtonBar() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cityWishList.data);
  const currentList = useSelector((state) => state.cityWishList.currentList);
  const selectedData = useSelector((state) => state.cityWishList.selectedData);

  const handleChange = (event, newAlignment) => {
    dispatch(setCurrentList(newAlignment));
  };

  useEffect(() => {
    if (currentList === "all") dispatch(setVisibleData(data));
    if (currentList === "selected") dispatch(setVisibleData(selectedData));
  }, [currentList]);

  return (
    <Stack direction="row" gap={2} mt="5px">
      <ToggleButtonGroup
        exclusive
        value={currentList}
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
      >
        random
      </Button>
    </Stack>
  );
}
