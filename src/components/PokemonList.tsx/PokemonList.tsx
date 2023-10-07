import { Box, Grid, Text, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import { RawData } from '../../types/types';

interface PokemonListProps {
  pokemons: RawData[];
}

export const PokemonList: FC<PokemonListProps> = ({ pokemons }) => {
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
      {pokemons.map((pokemon, index) => (
        <Box key={index} p={4} border="1px solid #e2e8f0" borderRadius="md">
          <Text fontWeight="bold">{pokemon.name}</Text>
        </Box>
      ))}
    </Grid>
  );
};
