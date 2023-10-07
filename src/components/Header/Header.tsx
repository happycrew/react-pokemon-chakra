import React from 'react';
import {
  Flex,
  Box,
  IconButton,
  useColorMode,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { colors } from '../../utils/colors';
import { Search } from '../Search';

interface HeaderProps {
  toggleColorMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleColorMode }) => {
  const { colorMode } = useColorMode();
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  return (
    <Flex
      as="header"
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      backgroundColor={
        colorMode === 'light' ? colors.light.background : colors.dark.background
      }
      position="sticky"
      top="0">
      {isLargerThan500 && (
        <Heading
          fontSize="2xl"
          fontWeight="bold"
          color={colorMode === 'light' ? colors.light.text : colors.dark.text}>
          Pokemon App
        </Heading>
      )}
      <Box display="flex" alignItems="center">
        <Search />
        <IconButton
          aria-label={`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          ml="2"
          bg="transparent"
          color={colorMode === 'light' ? colors.light.text : colors.dark.text}
          _hover={{ bg: 'transparent' }}
        />
      </Box>
    </Flex>
  );
};
