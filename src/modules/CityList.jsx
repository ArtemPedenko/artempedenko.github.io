import { Box, InputBase, styled, Stack, Typography } from "@mui/material";
import { List } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";
import CityListCard from "./cityList/CityListCard";

export default function CityList() {
  const visibleData = useSelector((state) => state.cityWishList.visibleData);
  const rowRenderer = ({
    index, // Index of row
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    key, // Unique key within array of rendered rows
    parent, // Reference to the parent List (instance)
    style, // Style object to be applied to row (to position it);
  }) => (
    <Box key={key} style={style}>
      <CityListCard data={visibleData[index]} />
    </Box>
  );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
      <List
        width={800}
        height={600}
        rowCount={visibleData.length}
        rowHeight={100}
        rowRenderer={rowRenderer}
        overscanRowCount={5}
      />
    </Box>
  );
}
