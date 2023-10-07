import { Box, Spinner } from '@chakra-ui/react';
import { FC } from 'react';

export const Loader: FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Spinner size="xl" />
    </Box>
  );
};
