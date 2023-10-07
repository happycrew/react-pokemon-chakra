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

interface HeaderProps {
  isLight: boolean; // Передаем значение светлой/темной темы через пропс
  toggleColorMode: () => void; // Передаем функцию переключения темы через пропс
}

export const Header: React.FC<HeaderProps> = ({ isLight, toggleColorMode }) => {
  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      padding="1rem"
      backgroundColor={isLight ? '#F7F7F7' : '#1A202C'}>
      <Text
        fontSize="2xl"
        fontWeight="bold"
        color={isLight ? '#333333' : '#E2E8F0'}>
        Pokemon App
      </Text>
      <Box display="flex" alignItems="center">
        <InputGroup>
          <Input
            type="text"
            placeholder="Search Pokemon..."
            bg={isLight ? '#FFFFFF' : '#2D3748'}
            borderRadius="md"
            borderColor="transparent"
            width="300px"
            _focus={{ borderColor: isLight ? '#007BFF' : '#63B3ED' }}
          />
          <InputLeftElement pointerEvents="none">
            <SearchIcon color={isLight ? '#333333' : '#E2E8F0'} />
          </InputLeftElement>
        </InputGroup>
        <IconButton
          aria-label={`Switch to ${isLight ? 'dark' : 'light'} mode`}
          icon={isLight ? <MoonIcon /> : <SunIcon />}
          onClick={toggleColorMode}
          ml="2"
          bg="transparent"
          color={isLight ? '#333333' : '#E2E8F0'}
          _hover={{ bg: 'transparent' }}
        />
      </Box>
    </Flex>
  );
};
