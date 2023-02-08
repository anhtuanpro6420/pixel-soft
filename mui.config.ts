import { createTheme } from "@mui/material/styles";
import { buttonClasses, inputClasses } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: "Manrope, sans-serif",
  },
  palette: {
    primary: {
      main: "#532F91",
    },
    secondary: {
      main: "#FFFFFF",
    },
    success: {
      main: "#00875A",
    },
    info: {
      main: "#767676",
    },
    action: {
      disabledBackground: "",
      disabled: "",
    },
  },
  components: {
    MuiButtonBase: {
      styleOverrides: {
        root: {
          [`&.${buttonClasses.disabled}`]: {
            opacity: 0.5,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          fontFamily: "Readex Pro",
          fontStyle: "normal",
          fontWeight: 300,
          fontSize: "14px",
          lineHeight: "20px",
          color: "#000",
        },
      },
    },
  },
});

export default theme;
