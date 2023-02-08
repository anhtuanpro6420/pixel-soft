import "@Styles/index.scss";
import type { AppProps } from "next/app";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "../../mui.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
