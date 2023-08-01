import { Box, InputBase, styled, Stack, Typography } from "@mui/material";
import { List } from "react-virtualized";
//import { FixedSizeList as List } from "react-window";
import { useSelector, useDispatch } from "react-redux";
import CityListCard from "./cityList/CityListCard";

export default function CityList() {
  const data = useSelector((state) => state.cityWishList.data);
  const rowRenderer = ({
    index, // Index of row
    isScrolling, // The List is currently being scrolled
    isVisible, // This row is visible within the List (eg it is not an overscanned row)
    key, // Unique key within array of rendered rows
    parent, // Reference to the parent List (instance)
    style, // Style object to be applied to row (to position it);
  }) => (
    <Box key={key} style={style}>
      {/* <Typography className="element">{data[index]}</Typography> */}
      <CityListCard data={data[index]} />
    </Box>
  );

  // const Row = ({ index }) => (
  //   //<Box>
  //   //  {/* <Typography className="element">{data[index]}</Typography> */}
  //   //  <CityListCard data={data[index]} />
  //   //</Box>
  //   <div style={{ color: "white" }}>{data[index]}</div>
  // );

  return (
    <Box sx={{ display: "flex", justifyContent: "center", mt: "10px" }}>
      <List
        width={800}
        height={600}
        rowCount={data.length}
        rowHeight={100}
        rowRenderer={rowRenderer}
        overscanRowCount={5}
      />
    </Box>
  );
}
