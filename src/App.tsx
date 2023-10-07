import { FC } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';

export const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  return (
    <>
      <Header
        isLight={isLight}
        toggleColorMode={toggleColorMode}
      />
      <h1>Hello world</h1>
      <Footer isLight={isLight} />
    </>
  );
};
