import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import MapModal from "../../components/MapModal";
import {
  Box,
  InputBase,
  styled,
  Stack,
  Typography,
  Button,
  Container,
} from "@mui/material";
import { addToSelected } from "../../utils";
import { setSelectedData } from "../../store/slice";

export default function CityListCard(props) {
  const { data } = props;
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.cityWishList.selectedData);

  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);

  return (
    <>
      <Container
        sx={{
          display: "flex",
          backgroundColor: "primary.main",
          color: "secondary.main",
          padding: "10px",
          mt: "10px",
          borderRadius: "5px",
          alignItems: "center",
          width: "1150px",
          justifyContent: "space-between",
        }}
      >
        <Stack spacing={2}>
          <Typography>{data[0]}</Typography>
          <Typography>{data[3]}</Typography>
        </Stack>
        <Box sx={{ width: "300px" }}>
          <Stack spacing={1} useFlexGap flexWrap="wrap" direction="row">
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={modalOpen}
            >
              See on map
            </Button>
            <Button variant="outlined" color="secondary" size="small">
              delete
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              size="small"
              onClick={() =>
                dispatch(setSelectedData(addToSelected(selectedData, data)))
              }
            >
              I want to visit
            </Button>
          </Stack>
        </Box>
      </Container>
      <MapModal open={open} close={modalClose} />
    </>
  );
}
