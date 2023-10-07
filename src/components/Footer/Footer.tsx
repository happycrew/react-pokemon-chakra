import { Box, useColorMode } from '@chakra-ui/react';
import { FC } from 'react';
import { colors } from '../../utils/colors';

export const Footer: FC = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="footer"
      textAlign="center"
      padding="1rem"
      position="fixed"
      bottom="0"
      left="0"
      right="0"
      backgroundColor={
        colorMode === 'light' ? colors.light.background : colors.dark.background
      }
      boxShadow={
        colorMode === 'light' ? colors.light.boxShadow : colors.dark.boxShadow
      }>
      Angular zalupa © {new Date().getFullYear()}
    </Box>
  );
};
