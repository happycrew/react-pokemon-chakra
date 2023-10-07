import { FC, useEffect, useState } from 'react';
import { Box, Grid, useColorMode, Text } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import './App.scss';
import { Pokemon } from './types/types';
import { PokemonList } from './components/PokemonList.tsx';
import { getAllPokemons } from './utils/pokemons.ts';

export const App: FC = () => {
  const { toggleColorMode } = useColorMode();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllPokemons();
        setPokemons(data);
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
