import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    boldText: {
      fontWeight: 700,
      fontSize: "24px",
    },
    boldTextMedium: {
      fontWeight: 700,
      fontSize: "18px",
    },
  },
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      light: "#97C459",
      main: "#d1d1d1",
    },
    custom1: {
      light: "#97C459",
      main: "#ffffff",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
});

export default theme;
