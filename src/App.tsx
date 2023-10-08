import { FC, useEffect, useState } from 'react';
import { Box, Link, useColorMode, Text } from '@chakra-ui/react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Pokemon } from './types/types';
import { PokemonList } from './components/PokemonList.tsx';
import { getAllPokemons, getPokemonsByName } from './utils/pokemons.ts';
import { Loader } from './components/Loader/Loader.tsx';
import './App.scss';
import { ModalWindow } from './components/ModalWindow/ModalWindow.tsx';
import { getLocalStorage, setLocalStorage } from './utils/localStorage.ts';
import { LocalStorageKeys } from './utils/enum.ts';

export const App: FC = () => {
  const { toggleColorMode } = useColorMode();
  const [isLoaded, setIsLoaded] = useState(false);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [term, setTerm] = useState(() =>
    getLocalStorage(LocalStorageKeys.SEARCH, ''),
  );

  useEffect(() => {
    setIsLoaded(true);
    const fetchData = async () => {
      let data: Pokemon[] = [];
      try {
        if (!term) {
          data = await getAllPokemons();
        } else {
          data = await getPokemonsByName(term.toLowerCase());
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

  const handleCardClick = (pokemon: Pokemon) => {
    setSelectedPokemon(pokemon);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPokemon(null);
  };

  const updateTheme = (newTheme: string) => {
    toggleColorMode();
    setLocalStorage(LocalStorageKeys.THEME, newTheme);
  };

  return (
    <>
      <Header
        toggleColorMode={updateTheme}
        term={term}
        onInputChange={handleInputChange}
      />
      {isModalOpen && (
        <ModalWindow
          pokemon={selectedPokemon}
          isModal={isModalOpen}
          closeModal={closeModal}
        />
      )}
      {isLoaded ? (
        <Loader />
      ) : (
        <div>
          {pokemons.length === 0 ? (
            <Box textAlign="center" mt="5em">
              <Text fontSize="xl">
                Sorry, zero pokemons here.
                <br />
                But you can put your time to good use and learn{' '}
                <Link href="https://angular.io/" target="_blank" fontSize="2xl">
                  Angular
                </Link>{' '}
                here.
              </Text>
            </Box>
          ) : (
            <PokemonList pokemons={pokemons} handlePokemon={handleCardClick} />
          )}
        </div>
      )}
      <Footer />
    </>
  );
};
