import "@Styles/index.scss";
import type { AppProps } from "next/app";
import { CssBaseline, StyledEngineProvider, ThemeProvider } from "@mui/material";
import theme from "../../mui.config";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <CssBaseline />
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
