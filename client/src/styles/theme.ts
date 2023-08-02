import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
  interface Palette {
    blue: Palette["primary"];
  }

  interface PaletteOptions {
    blue?: PaletteOptions["primary"];
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsColorOverrides {
    blue: true;
  }
}

const theme = createTheme({
  palette: {
    blue: {
      main: "#0000FF",
      light: "#3232ff",
      dark: "#000099",
      contrastText: "#e5e5e5",
    },
  },
});

export default theme;
