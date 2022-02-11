import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import palette from "./palette";
let theme = createTheme({
  palette: palette,
  direction: "ltr",
  spacing: 2,
  components:{
    MuiButton:{
      styleOverrides:{
        root:{
          textTransform:"capitalize",
          borderRadius:8,
          fontWeight:500
        }
      }
    },
    MuiTextField:{
      styleOverrides:{
        root:{
          width:"100%",
          minHeight: 45,
          "& fieldset": {
              borderColor:"#a3a3a3",
              minHeight: 50,
          },
          "&:hover fieldset": {
              borderColor: "#a3a3a3",
          },
          "&.Mui-focused fieldset": {
              borderColor: "#a3a3a3",
              borderWidth: 1,
          },
          "& .MuiFormHelperText-root": {
            height: 10,
            fontSize:11,
            color:palette.error.main
        },
        },
      }
    }
  },
  typography: {
    h1: {
      fontSize: 37,
      fontWeight: "bold",
    },

    h2: {
      fontSize: 35,
      fontWeight: "bold",
      lineHeight: 1.69,
      textAlign: "left",
    },
    h3: {
      fontSize: 18,
      fontWeight: "bold",
      lineHeight: 1.69,
      textAlign: "left",
    },
    h4: {
      fontSize: "1.3rem",
      width:"fit-content",
      fontWeight: "bold",
    },
    h5: {
      fontSize: "1rem",
      fontWeight: "500",
    },
    h6: {
      fontSize: "0.98rem",
    },
    body1: {
      fontSize: "0.93rem",
    },
    body2: {
      fontSize: "0.8rem",
    },
    caption: {
      fontSize: "0.81rem",
    },
    allVariants: {
      fontFamily: "Poppins",
      fontWeight: "300",
    },

  },
});
export default responsiveFontSizes(theme);
