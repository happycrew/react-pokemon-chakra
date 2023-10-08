import { SearchIcon } from '@chakra-ui/icons';
import {
  InputGroup,
  Input,
  InputLeftElement,
  useColorMode,
} from '@chakra-ui/react';
import { FC, ChangeEvent } from 'react';
import { colors } from '../../utils/colors';
import { setLocalStorage } from '../../utils/localStorage';
import { LocalStorageKeys } from '../../utils/enum';

interface SearchProps {
  term: string;
  onInputChange: (term: string) => void;
}

export const Search: FC<SearchProps> = ({ term, onInputChange }) => {
  const { colorMode } = useColorMode();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newTerm = e.target.value;
    onInputChange(newTerm);
    setLocalStorage(LocalStorageKeys.SEARCH, newTerm);
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
