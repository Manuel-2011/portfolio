import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { cyan, orange, deepPurple } from '@material-ui/core/colors';

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: cyan,
      type: 'light',
    },
  })
);

export const darkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: orange,
      secondary: deepPurple,
      type: 'dark',
    },
  })
);
