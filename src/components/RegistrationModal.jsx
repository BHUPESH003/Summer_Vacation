import React from 'react';
import Modal from 'react-modal';
import { useEffect } from 'react';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
};

Modal.setAppElement('#root'); // Set the root element
const RegistrationModal = ({ isOpen, onClose, success, message }) => {
    // Use useEffect to set a timer to automatically close the modal
    useEffect(() => {
      if (isOpen) {
        const timer = setTimeout(() => {
          onClose();
        }, 3000); // Close the modal after 3 seconds (3000 milliseconds)
  
        return () => clearTimeout(timer); // Clear the timer if the component unmounts
      }
    }, [isOpen, onClose]);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Registration Modal"
    >
      {success ? (
        <div>
          <span role="img" aria-label="Success" style={{ fontSize: '2rem' }}>
            ✅
          </span>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <span role="img" aria-label="Failure" style={{ fontSize: '2rem' }}>
            ❌
          </span>
          
          <p>{message}</p>
        </div>
      )}
    </Modal>
  );
};

export default RegistrationModal;
