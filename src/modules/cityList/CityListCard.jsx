import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import MapModal from "../../components/MapModal";
import { Box, Stack, Typography, Button } from "@mui/material";
import { addToSelectedData, removeFromSelectedData } from "../../store/slice";
import { Lighter } from "../../utils";

export default function CityListCard(props) {
  const { cityItem } = props;
  const dispatch = useDispatch();
  const searchingText = useSelector(
    (state) => state.cityWishList.searchingText
  );
  const currentStatus = useSelector(
    (state) => state.cityWishList.currentStatus
  );

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            display: "flex",
            backgroundColor: "primary.main",
            color: "secondary.main",
            padding: "10px",
            mt: "10px",
            borderRadius: "5px",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80vw",
          }}
        >
          <Stack spacing={2}>
            <Typography>
              <Lighter str={cityItem.city} filter={searchingText} />
            </Typography>
            <Typography>
              <Lighter str={cityItem.country} filter={searchingText} />
            </Typography>
          </Stack>
          <Box>
            <Stack spacing={1}>
              <Button
                variant="outlined"
                color="secondary"
                size="small"
                onClick={modalOpen}
              >
                See on map
              </Button>
              {currentStatus === "all" ? (
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => dispatch(addToSelectedData(cityItem))}
                >
                  I want to visit
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  color="secondary"
                  size="small"
                  onClick={() => dispatch(removeFromSelectedData(cityItem))}
                >
                  delete
                </Button>
              )}
            </Stack>
          </Box>
        </Box>
      </Box>
      <MapModal
        open={open}
        close={modalClose}
        lat={cityItem.lat}
        lng={cityItem.lng}
      />
    </>
  );
}
