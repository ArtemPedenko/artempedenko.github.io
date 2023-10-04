import { Stack, Box } from "@mui/material";
import RandomStreet from "../components/RandomStreet";
import ListButtons from "./buttonBar/ListButtons";
import ButtonRandom from "./buttonBar/ButtonRandom";

export default function ButtonBar() {
  return (
    <Stack direction="row" gap={2} mt="5px" sx={{ width: "1500px" }}>
      <ListButtons />
      <ButtonRandom />
      <RandomStreet />
    </Stack>
  );
}
