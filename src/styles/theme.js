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
      light: "#991bb3", //purpleHover
      main: "#76168a", //purple
      dark: "#2e0836",
      contrastText: "#ffffff",
    },
    secondary: {
      light: "#ffffff",
      main: "#ffffff", //white
      dark: "#2e0836",
      contrastText: "#ffffff",
    },
    custom1: {
      light: "#97C459",
      main: "#ffffff",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)",
    },
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "#ffffff",
          backgroundColor: "#76168a",
          width: "100%",
          borderRadius: "5px",
          "&:hover": {
            backgroundColor: "#991bb3",
          },
        },
      },
    },
  },
});

export default theme;
