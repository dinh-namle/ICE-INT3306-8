import React from 'react';
import Modal from '../components/Modal';

interface SelectPayoutMethodPopupProps {
  onClose: () => void;
  onPayPal: () => void;
  onBank: () => void;
}

const SelectPayoutMethodPopup: React.FC<SelectPayoutMethodPopupProps> = ({ onClose, onPayPal, onBank }) => {
  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Select Payout Method</h2>
      <button onClick={onPayPal} className="w-full bg-blue-500 text-white py-2 mb-4 rounded hover:bg-blue-700">Add PayPal</button>
      <button onClick={onBank} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">Add Bank Account</button>
    </Modal>
  );
};

export default SelectPayoutMethodPopup;
