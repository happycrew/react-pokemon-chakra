import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { App } from './App.tsx';
import './index.scss';
import { getLocalStorage } from './utils/localStorage.ts';
import { LocalStorageKeys } from './utils/enum.ts';

const initialColor = getLocalStorage(LocalStorageKeys.THEME, 'dark');

const initialColorMode: 'dark' | 'light' | 'system' | undefined =
  initialColor as 'dark' | 'light' | 'system' | undefined;

console.log(initialColor);
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <ColorModeScript initialColorMode={initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
