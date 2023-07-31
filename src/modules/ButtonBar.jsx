import { Box, InputBase, styled, Stack } from "@mui/material";
import ButtonAll from "./buttonBar/ButtonAll";
import ButtonRandom from "./buttonBar/ButtonRandom";
import ButtonSelected from "./buttonBar/ButtonSelected";

export default function ButtonBar() {
    return (
    <Box sx={{mt: "10px"}}>
        <Stack
        direction="row"
        spacing={2}
        justifyContent="center"
        >
            <ButtonAll/>
            <ButtonSelected/>
            <ButtonRandom/>
        </Stack>
    </Box>
    );
}