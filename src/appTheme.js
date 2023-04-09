import { createTheme } from "@mui/material";
import COLORS from "./Color";
const appTheme = createTheme({
  typography: {
    fontFamily: 'Basier Circle,Roboto,system-ui,-apple-system,BlinkMacSystemFont,Helvetica Neue,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji,Segoe UI,Oxygen,Ubuntu,Cantarell,Open Sans',
  },
  palette: {
    primary: {
      main: COLORS.PRIMARY,
    },
    secondary: {
      main: COLORS.SECONDARY,
    },
    action:{
      hover:"#00b7b75c",
    }
  },
  components: {
    MuiTextField:{
      styleOverrides:{
        root:{
          zIndex:0,
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          color: "black",
          borderRadius: 18,
          textTransform:"capitalize",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLORS.PRIMARY,
          
        },
      },
    }, 
  },
});

export default appTheme;
