import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import './fontStyles.css';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import WebpageRouter from './WebpageRouter';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <WebpageRouter />
    </ThemeProvider>
  </React.StrictMode>,
);

// reportWebVitals(console.debug);
