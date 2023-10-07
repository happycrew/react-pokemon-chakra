import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  useColorMode,
} from '@chakra-ui/react';
import { FC } from 'react';
import { Pokemon } from '../../types/types';

interface ModalWindowProps {
  pokemon: Pokemon | null;
  closeModal: () => void;
  isModal: boolean;
}

export const ModalWindow: FC<ModalWindowProps> = ({
  pokemon,
  closeModal,
  isModal,
}) => {
  const { colorMode } = useColorMode();
  console.log(colorMode);
  return (
    <Modal isOpen={isModal} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontSize="30px" m="0 auto" textTransform="uppercase">
          {pokemon!.name}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <p>Height: {pokemon!.height}</p>
          <p>Weight: {pokemon!.weight}</p>
        </ModalBody>
        <ModalBody>
          {pokemon!.stats.map(el => (
            <Text>
              <Box as="span" fontWeight="bold" fontSize="xl" marginRight="10px">
                {el.stat.name}:
              </Box>
              {el.base_stat}
            </Text>
          ))}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
