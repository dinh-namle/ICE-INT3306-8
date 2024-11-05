
import React from "react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  return <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center'>
    <div className='bg-white p-4 rounded-md relative w-1/3'>
      <button 
        onClick={() => onClose()} 
        className='absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'
      >
        &times;
      </button>
      {children}
    </div>
  </div>;
}

export default Modal;