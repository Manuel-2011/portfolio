import React, { useReducer } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../themes';

const SwitchThemeContext = React.createContext();

export const useThemeContext = () => React.useContext(SwitchThemeContext);

const SwitchTheme = ({ children }) => {
  const [darkMode, switchTheme] = useReducer((state) => !state, false);
  const theme = darkMode ? darkTheme : lightTheme;
  return (
    <SwitchThemeContext.Provider value={{ theme, switchTheme, darkMode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </SwitchThemeContext.Provider>
  );
};

export default SwitchTheme;
