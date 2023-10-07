import { FC } from 'react';
import './App.scss';
import { Header } from './components/Header';
import { useColorMode } from '@chakra-ui/react';
import { colors } from './utils/colors';

export const App: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isLight = colorMode === 'light';
  return (
    <>
      <Header
        isLight={isLight}
        toggleColorMode={toggleColorMode}
        colors={colors}
      />
      <h1>Hello world</h1>
    </>
  );
};
