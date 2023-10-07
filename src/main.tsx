import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react';
import { App } from './App.tsx';
import './index.scss';

const colors = {
  light: {
    background: '#bb3636',
    text: '#f70f0f',
    accent: '#007BFF',
  },
  dark: {
    background: '#1a5ad9',
    text: '#1270e9',
    accent: '#63B3ED',
  },
};

const theme = extendTheme({
  colors: {
    brand: colors.light,
  },
  config: {
    initialColorMode: 'light',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
