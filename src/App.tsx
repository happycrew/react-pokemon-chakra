import { FC, useEffect, useState } from 'react';
import { Box, Grid, useColorMode, Text } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';
import { RawData } from './types/types';
import { PokemonList } from './components/PokemonList.tsx';

export const App: FC = () => {
  const { toggleColorMode } = useColorMode();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState<RawData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://pokeapi.co/api/v2/pokemon/?limit=1200',
        );
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
  }, []);
  console.log(pokemons);
  return (
    <>
      <Header toggleColorMode={toggleColorMode} />
      <PokemonList pokemons={pokemons} />
      <Footer />
    </>
  );
};
