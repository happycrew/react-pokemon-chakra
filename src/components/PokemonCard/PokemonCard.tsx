import { FC } from 'react';
import { Pokemon } from '../../types/types';
import { Box, Text, Image, useColorMode, Heading } from '@chakra-ui/react';
import { colors } from '../../utils/colors';

interface PokemonProps {
  pokemon: Pokemon;
}

export const PokemonCard: FC<PokemonProps> = ({ pokemon }) => {
  const { colorMode } = useColorMode();

  return (
    <Box
      p={4}
      border={colorMode === 'light' ? colors.light.border : colors.dark.border}
      borderRadius="md"
      cursor="pointer"
      _hover={{
        boxShadow: 'lg',
        backgroundColor: colorMode === 'light' ? '#C4DFDF' : '#1A202C',
      }}>
      <Heading
        as="h2"
        size="md"
        fontWeight="bold"
        textTransform="uppercase"
        textAlign="center">
        {pokemon.name}
      </Heading>
      <Image
        src={pokemon.sprites.front_default!}
        alt={pokemon.name}
        boxSize="170px"
        mx="auto"
        my={5}
      />
      <Text paddingTop="10px">Height: {pokemon.height}</Text>
      <Text>Weight: {pokemon.weight}</Text>
    </Box>
  );
};
