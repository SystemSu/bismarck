import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#1A509E",
    },
    secondary: {
      main: "#FF0000",
    },
    success: {
      main: "#27AE60",
    },
    info: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Verdana",
    h6: {
      fontWeight: "bold",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& input:valid + fieldset": {
            borderColor: "black",
            borderWidth: 2,
            
          },

          "& label.Mui-focused": {
            fontWeight: "bold",
          
          },
          
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        
        root: {
          textTransform: "capitalize",
          fontWeight: "bold",
       

        },

        text: {
          fontWeight: "bold",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontWeight: "bold",
          fontSize:'12px'
        },
      },
    },
    MuiInputLabel:{
     styleOverrides:{
      root:{
        fontWeight: "bold",
      }
     }
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
        padding:'normal',
        
       
        

      },
    },

  },
  breakpoints:{
    values:{
      xs:0,
      sm:768,
      md:900,
      lg:1200,
      xl:1536

    }
  }
});
