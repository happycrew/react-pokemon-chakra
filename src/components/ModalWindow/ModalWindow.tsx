import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
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
  return (
    <Modal isOpen={isModal} onClose={closeModal}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{pokemon!.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          {/* Отображение данных о покемоне */}
          <p>Height: {pokemon!.height}</p>
          <p>Weight: {pokemon!.weight}</p>
          {/* Добавьте другие данные о покемоне */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
