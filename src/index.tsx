import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import WebpageRouter from './WebpageRouter';

const container = document.getElementById('root')!;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <WebpageRouter />
  </React.StrictMode>,
);

// reportWebVitals(console.debug);
