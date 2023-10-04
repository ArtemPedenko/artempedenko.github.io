import { Box } from "@mui/material";
import { AutoSizer } from "react-virtualized";
import { FixedSizeList as List } from "react-window";
import CityListCard from "./cityList/CityListCard";

export default function CityList({ visibleData }) {
  const rowRenderer = ({ index, isScrolling, isVisible, parent, style }) => (
    <Box
      style={{
        ...style,
        top: `${parseFloat(style.top)}px`,
        width: "80vw",
      }}
    >
      <CityListCard cityItem={visibleData[index]} />
    </Box>
  );

  return (
    <AutoSizer
      style={{
        width: "80vw",
        height: "87vh",
        margin: "0 auto",
      }}
    >
      {({ height, width }) => (
        <List
          width={width}
          height={height}
          itemCount={visibleData.length}
          itemSize={100}
        >
          {rowRenderer}
        </List>
      )}
    </AutoSizer>
  );
}
