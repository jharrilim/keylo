import { createTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
  },
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: 'transparent',
      },
    },
  },
});

export default theme;
