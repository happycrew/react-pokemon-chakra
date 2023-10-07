import { FC, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';

export const App: FC = () => {
  const { toggleColorMode } = useColorMode();
  const [pokemons, setPokemons] = useState([]);
  return (
    <>
      <Header toggleColorMode={toggleColorMode} />
      <main>
        <h1>Hello world</h1>
      </main>
      <Footer />
    </>
  );
};
