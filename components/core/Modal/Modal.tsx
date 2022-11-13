import { FC, ReactNode } from 'react';
import ReactModal from 'react-modal';

import { ModalStyle, OverlayStyle } from './styled';

ReactModal.setAppElement('#__next');

export type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      className="_"
      overlayClassName="_"
      contentElement={(props, children) => (
        <ModalStyle {...props}>{children}</ModalStyle>
      )}
      overlayElement={(props, contentElement) => (
        <OverlayStyle {...props}>{contentElement}</OverlayStyle>
      )}
    >
      {children}
    </ReactModal>
  );
};
