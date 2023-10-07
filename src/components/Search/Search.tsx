import { SearchIcon } from '@chakra-ui/icons';
import {
  InputGroup,
  Input,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';
import { colors } from '../../utils/colors';

export const Search: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="Search Pokemon..."
        bg={
          colorMode === 'light'
            ? colors.light.background
            : colors.dark.background
        }
        borderRadius="md"
        width="250px"
        _focus={{
          borderColor:
            colorMode === 'light' ? colors.light.accent : colors.dark.accent,
        }}
      />
      <InputLeftElement pointerEvents="none">
        <SearchIcon
          color={colorMode === 'light' ? colors.light.text : colors.dark.text}
        />
      </InputLeftElement>
    </InputGroup>
  );
};
