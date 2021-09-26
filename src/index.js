import React from 'react';
import ReactDOM from 'react-dom';
import { Routers } from './Router';
import { MainTheme } from './styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalSettings } from './styles/GlobalSettings';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={MainTheme}>
      <GlobalSettings />
      <Routers />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

