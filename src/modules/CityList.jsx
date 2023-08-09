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
        width: "100vw",
      }}
    >
      <CityListCard cityItem={visibleData[index]} />
    </Box>
  );

  return (
    <AutoSizer style={{ width: "90vw", height: "87vh" }}>
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
