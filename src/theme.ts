import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        html {
          height: 100%;
        },
        body {
          height: 100%;
          background-color: #f4f4f5;
        },
        #root {
          height: 100%;
        },
      `,
    },
  },
});
