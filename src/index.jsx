import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createEmotionCache from "./styles/createEmotionCache";
import theme from "./styles/theme";
import store from "./store/store";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
const clientSideEmotionCache = createEmotionCache();

root.render(
  <StrictMode>
    <CacheProvider value={clientSideEmotionCache}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </CacheProvider>
  </StrictMode>
);
