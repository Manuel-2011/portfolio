import { CssBaseline, Paper } from '@material-ui/core';
import React from 'react';
import Intro from './components/Intro';
import Navbar from './components/Navbar';
import SwitchTheme from './components/SwitchTheme';

const App = () => {
  return (
    <>
      <CssBaseline />
      <SwitchTheme>
        <Paper>
          <Navbar />
          <Intro />
        </Paper>
      </SwitchTheme>
    </>
  );
};

export default App;
