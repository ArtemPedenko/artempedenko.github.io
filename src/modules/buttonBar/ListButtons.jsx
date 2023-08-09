import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";
import { useEffect } from "react";
import { setVisibleData, setCurrentStatus } from "../../store/slice";
import { useSelector, useDispatch } from "react-redux";

const StyledButton = styled(ToggleButton)(({ theme }) => ({
  backgroundColor: "#76168a",
  color: "white",
}));

export default function ListButtons() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cityWishList.data);
  const currentStatus = useSelector(
    (state) => state.cityWishList.currentStatus
  );
  const selectedData = useSelector((state) => state.cityWishList.selectedData);

  useEffect(() => {
    if (currentStatus === "all") dispatch(setVisibleData(data));
    if (currentStatus === "selected") dispatch(setVisibleData(selectedData));
  }, [currentStatus]);

  const handleChange = (event, newAlignment) => {
    dispatch(setCurrentStatus(newAlignment));
  };

  return (
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
  );
}
