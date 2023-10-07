import { FC } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { ColorModeProvider, useColorMode } from '@chakra-ui/react';

export const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  return (
    <ColorModeProvider>
      <Header isLight={isLight} toggleColorMode={toggleColorMode} />
      <h1>Hello world</h1>
    </ColorModeProvider>
  );
};
