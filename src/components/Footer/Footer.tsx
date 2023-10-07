import { Box } from '@chakra-ui/react';
import { FC } from 'react';
import { colors } from '../../utils/colors';

interface FooterProps {
  isLight: boolean;
}

export const Footer: FC<FooterProps> = ({ isLight }) => {
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
        isLight ? colors.light.background : colors.dark.background
      }>
      Angular zalupa © {new Date().getFullYear()}
    </Box>
  );
};
