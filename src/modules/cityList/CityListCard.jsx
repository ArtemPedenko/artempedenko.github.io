import {
  Box,
  InputBase,
  styled,
  Stack,
  Typography,
  Button,
} from "@mui/material";

export default function CityListCard(props) {
  console.log(props.data);
  return (
    <Box
      sx={{
        display: "flex",
        backgroundColor: "primary.main",
        color: "secondary.main",
        padding: "10px",
        mt: "10px",
        borderRadius: "5px",
        justifyContent: "space-between",
        alignItems: "center",
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
        <Button variant="outlined" color="secondary" size="small">
          I want to visit
        </Button>
      </Stack>
    </Box>
  );
}
