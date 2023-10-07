import { FC, useEffect, useState } from 'react';
import { useColorMode } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Pokemon } from './types/types';
import { PokemonList } from './components/PokemonList.tsx';
import { getAllPokemons, getPokemonsByName } from './utils/pokemons.ts';
import { Loader } from './components/Loader/Loader.tsx';
import './App.scss';

export const App: FC = () => {
  const { toggleColorMode } = useColorMode();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    const fetchData = async () => {
      let data: Pokemon[] = [];
      try {
        if (!term) {
          data = await getAllPokemons();
        } else {
          data = await getPokemonsByName(term);
        }
        setPokemons(data);
      } catch (error) {
        console.error('Ошибка при получении данных:', error);
      }
    };
    fetchData();
    setTimeout(() => {
      setIsLoaded(false);
    }, 1200);
  }, [term]);

  const handleInputChange = (newTerm: string) => {
    setTerm(newTerm);
  };

  return (
    <>
      <Header
        toggleColorMode={toggleColorMode}
        term={term}
        onInputChange={handleInputChange}
      />
      {isLoaded ? <Loader /> : <PokemonList pokemons={pokemons} />}
      <Footer />
    </>
  );
};
