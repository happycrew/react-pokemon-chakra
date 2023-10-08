import React, { useEffect, useState } from 'react';
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
  toggleColorMode: (newTheme: string) => void;
  term: string;
  onInputChange: (term: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  toggleColorMode,
  term,
  onInputChange,
}) => {
  const { colorMode } = useColorMode();
  const [isLargerThan500] = useMediaQuery('(min-width: 500px)');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
      top="0"
      boxShadow={
        isScrolled
          ? colorMode === 'light'
            ? colors.light.boxShadow
            : colors.dark.boxShadow
          : 'none'
      }>
      {isLargerThan500 && (
        <Heading
          fontSize="2xl"
          fontWeight="bold"
          color={colorMode === 'light' ? colors.light.text : colors.dark.text}>
          Pokemon App
        </Heading>
      )}
      <Box display="flex" alignItems="center">
        <Search term={term} onInputChange={onInputChange} />
        <IconButton
          aria-label={`Switch to ${
            colorMode === 'light' ? 'dark' : 'light'
          } mode`}
          icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          onClick={() =>
            toggleColorMode(colorMode === 'light' ? 'dark' : 'light')
          }
          ml="2"
          bg="transparent"
          color={colorMode === 'light' ? colors.light.text : colors.dark.text}
          _hover={{ bg: 'transparent' }}
        />
      </Box>
    </Flex>
  );
};
