import { SearchIcon } from '@chakra-ui/icons';
import {
  InputGroup,
  Input,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import { FC, ChangeEvent } from 'react';
import { colors } from '../../utils/colors';

interface SearchProps {
  term: string;
  onInputChange: (term: string) => void;
}

export const Search: FC<SearchProps> = ({ term, onInputChange }) => {
  const { colorMode } = useColorMode();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    onInputChange(newTerm);
  };
  return (
    <InputGroup>
      <Input
        type="text"
        placeholder="Search Pokemon..."
        value={term}
        onChange={handleInputChange}
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
