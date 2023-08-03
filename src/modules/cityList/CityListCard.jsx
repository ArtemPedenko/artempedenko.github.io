import { useSelector, useDispatch } from "react-redux";
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
        <Box sx={{ width: 200 }}>
          <Stack spacing={2} flexWrap="wrap">
            <Button variant="outlined" color="secondary" size="small">
              See on map
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
            <Button variant="outlined" color="secondary" size="small">
              delete
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
