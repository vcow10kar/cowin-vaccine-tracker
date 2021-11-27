import { createTheme } from '@mui/material';

const primaryColor = '#002171';
const secondaryColor = '#0d47a1';

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: primaryColor,
        },
        secondary: {
            main: primaryColor,
        },
    },
    shape: {
        borderRadius: 5,
    },

    components: {
    MuiButton: {
        styleOverrides: {
          // Name of the slot
          root: {
            // Some CSS
            fontSize: '1.8vh',
            color: "white",
            fontWeight: 700,
          },
          sizeSmall: {
              fontSize: '1.4vh'
          }
        },
      },
    },

    MuiTextField: {
        styleOverrides: {
            root: {
                minWidth: '200px',
                fontSize: '1.2vh',
                '&:hover': {
                    border: secondaryColor
                }
            }
        }
    }
});

export default theme;