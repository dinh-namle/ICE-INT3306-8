import React from 'react';
import Modal from '../components/Modal';

interface SelectPayoutMethodPopupProps {
  onClose: () => void;
  onZaloPay: () => void;
  onMoMo: () => void;
}

const SelectPayoutMethodPopup: React.FC<SelectPayoutMethodPopupProps> = ({ onClose, onZaloPay, onMoMo }) => {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Select Payout Method</h2>
      <button onClick={onZaloPay} className="w-full bg-blue-500 text-white py-2 mb-4 rounded hover:bg-blue-700">Add ZaloPay</button>
      <button onClick={onMoMo} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">Add MoMo</button>
    </Modal>
  );
};

export default SelectPayoutMethodPopup;
