import { Box, InputBase, styled, Stack } from "@mui/material";
import { List } from "react-virtualized";
import { useSelector, useDispatch } from "react-redux";

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
    <div key={key} style={style}>
      <div className="element">{data[index]}</div>
    </div>
  );

  return (
    <List
      width={300}
      height={300}
      rowCount={data.length}
      rowHeight={25}
      rowRenderer={rowRenderer}
      className="list"
    />
  );
}
