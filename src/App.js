import { CssBaseline, Paper } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import Intro from './components/Intro';
import { lightTheme } from './themes';

const App = () => {
  return (
    <>
      <CssBaseline />
      <ThemeProvider theme={lightTheme}>
        <Paper>
          <Intro />
        </Paper>
      </ThemeProvider>
    </>
  );
};

export default App;
