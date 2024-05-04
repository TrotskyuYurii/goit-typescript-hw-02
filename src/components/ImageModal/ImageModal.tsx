import React from 'react';
import Modal from 'react-modal';

interface ImageModalProps {
  imageUrl: string;
  modalIsOpen: boolean;
  onRequestClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ imageUrl, modalIsOpen, onRequestClose }) => {
  
  Modal.setAppElement('#root');

  const customStyles: Modal.Styles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)' 
    },
    content: {
      width: "80%",
      height: "80%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: 'rgba(0, 0, 0, 0.85)'
    },
  };

  const modalImageStyles: React.CSSProperties = {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
  };

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onRequestClose}
      style={customStyles}
      contentLabel="Image Modal"
    >
      <img src={imageUrl} alt="Modal Image" style={modalImageStyles} />
    </Modal>
  );
};

export default ImageModal;
