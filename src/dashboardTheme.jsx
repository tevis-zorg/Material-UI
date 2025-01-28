import { createTheme } from "@mui/material/";

export const dashboardTheme = createTheme(
  {
    components: {
        // Name of the component
        MuiButtonBase: {
          styleOverrides: {
            root: {
                fontSize: '0.8rem!important'
            },
            container: {
                backgroundImage: 'linear-gradient(to top, #fb2f2f 25%, #ff99cc 85%)' 
            },
            // The props to change the default for.
            disableRipple: true, // No more ripple, on the whole application 💣!
          },
        },
        
      },
      typography: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      }, 
      spacing: [4, 8, 12, 16, 20],
      // theme.spacing{4}
  }
);