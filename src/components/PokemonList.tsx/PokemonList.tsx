import { Grid } from '@chakra-ui/react';
import { FC } from 'react';
import { Pokemon } from '../../types/types';
import { PokemonCard } from '../PokemonCard';

interface PokemonListProps {
  pokemons: Pokemon[];
  handlePokemon: (pokemon: Pokemon) => void;
}

export const PokemonList: FC<PokemonListProps> = ({
  pokemons,
  handlePokemon,
}) => {
  return (
    <Grid
      as="main"
      templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
      gap={16}
      justifyContent="center"
      maxWidth={{
        base: '300px',
        sm: '500px',
        md: '800px',
        lg: '1000px',
      }}
      margin="4em auto"
      gridTemplateColumns={{
        base: 'repeat(1, 1fr)',
        sm: 'repeat(2, 1fr)',
        md: 'repeat(3, 1fr)',
        lg: 'repeat(4, 1fr)',
      }}>
      {pokemons.map(pokemon => (
        <PokemonCard
          key={pokemon.id}
          pokemon={pokemon}
          handlePokemon={handlePokemon}
        />
      ))}
    </Grid>
  );
};
