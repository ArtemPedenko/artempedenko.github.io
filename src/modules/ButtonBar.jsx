import * as React from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Box,
  InputBase,
  styled,
  Stack,
} from "@mui/material";
import { useEffect } from "react";
import ButtonAll from "./buttonBar/ButtonAll";
import ButtonRandom from "./buttonBar/ButtonRandom";
import ButtonSelected from "./buttonBar/ButtonSelected";
import { setVisibleData, setCurrentList } from "../store/slice";
import { useSelector, useDispatch } from "react-redux";

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
    <ToggleButtonGroup exclusive onChange={handleChange}>
      <ToggleButton value="all">all</ToggleButton>
      <ToggleButton value="selected">selected</ToggleButton>
      <ToggleButton value="random">random</ToggleButton>

      {/* <ButtonAll />
      <ButtonSelected />
      <ButtonRandom /> */}
    </ToggleButtonGroup>
  );
}
