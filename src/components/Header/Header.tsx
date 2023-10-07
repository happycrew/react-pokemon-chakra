import React from 'react';
import {
  Flex,
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  IconButton,
  Text,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, SearchIcon } from '@chakra-ui/icons';
import { ColorTheme } from '../../types/types';

interface HeaderProps {
  isLight: boolean;
  toggleColorMode: () => void;
  colors: {
    light: ColorTheme;
    dark: ColorTheme;
  };
}

export const Header: React.FC<HeaderProps> = ({
  isLight,
  toggleColorMode,
  colors,
}) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      backgroundColor={
        isLight ? colors.light.background : colors.dark.background
      }
      position="sticky" 
      top="0" 
    >
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={isLight ? colors.light.text : colors.dark.text}>
        Pokemon App
      </Text>
      <Box display="flex" alignItems="center">
        <InputGroup>
          <Input
            type="text"
            placeholder="Search Pokemon..."
            bg={isLight ? colors.light.background : colors.dark.background}
            borderRadius="md"
            borderColor="transparent"
            width="300px"
            _focus={{
              borderColor: isLight ? colors.light.accent : colors.dark.accent,
            }}
          />
          <InputLeftElement pointerEvents="none">
            <SearchIcon
              color={isLight ? colors.light.text : colors.dark.text}
            />
          </InputLeftElement>
        </InputGroup>
        <IconButton
          aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
          icon={isLight ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          ml="2"
          bg="transparent"
          color={isLight ? colors.light.text : colors.dark.text}
          _hover={{ bg: 'transparent' }}
        />
      </Box>
    </Flex>
  );
};
