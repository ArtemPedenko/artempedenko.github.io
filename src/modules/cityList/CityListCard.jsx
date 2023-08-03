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
  const dispatch = useDispatch();
  const selectedData = useSelector((state) => state.cityWishList.selectedData);

  return (
    <Container
      sx={{
        display: "flex",
        backgroundColor: "primary.main",
        color: "secondary.main",
        padding: "10px",
        mt: "10px",
        borderRadius: "5px",
        justifyContent: "space-between",
        alignItems: "center",
        width: "1150px",
      }}
    >
      <Stack spacing={2}>
        <Typography>{props.data[0]}</Typography>
        <Typography>{props.data[3]}</Typography>
      </Stack>
      <Stack spacing={2}>
        <Button variant="outlined" color="secondary" size="small">
          See on map
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() =>
            dispatch(setSelectedData(addToSelected(selectedData, props.data)))
          }
        >
          I want to visit
        </Button>
      </Stack>
    </Container>
  );
}
