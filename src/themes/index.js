import { createMuiTheme } from '@material-ui/core/styles';
import { cyan, orange, deepPurple } from '@material-ui/core/colors';

export const lightTheme = createMuiTheme({
  palette: {
    primary: cyan,
    type: 'light',
  },
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: deepPurple,
    type: 'dark',
  },
});
