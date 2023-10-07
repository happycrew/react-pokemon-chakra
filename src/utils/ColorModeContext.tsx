import { ColorMode } from '@chakra-ui/react';
import { ColorModeContextType, ColorModeProviderProps } from '../types/types';
import React, { createContext, useContext, useState } from 'react';

const ColorModeContext = createContext<ColorModeContextType | undefined>(
  undefined,
);

export const useColorModeContext = (): ColorModeContextType => {
  const context = useContext(ColorModeContext);
  if (!context) {
    throw new Error(
      'useColorModeContext must be used within a ColorModeProvider',
    );
  }
  return context;
};

export const ColorModeProvider: React.FC<ColorModeProviderProps> = ({
  children,
}) => {
  const [colorMode, setColorMode] = useState<ColorMode>('light');

  const toggleColorMode = () => {
    setColorMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <ColorModeContext.Provider value={{ colorMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};
