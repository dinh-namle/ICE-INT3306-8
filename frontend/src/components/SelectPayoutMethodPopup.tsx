import React from 'react';

interface SelectPayoutMethodPopupProps {
  onClose: () => void;
  onPayPal: () => void;
  onBank: () => void;
}

const SelectPayoutMethodPopup: React.FC<SelectPayoutMethodPopupProps> = ({ onClose, onPayPal, onBank }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">&times;</button>
        <h2 className="text-xl font-semibold mb-4">Select Payout Method</h2>
        <button onClick={onPayPal} className="w-full bg-blue-500 text-white py-2 mb-4 rounded hover:bg-blue-700">Add PayPal</button>
        <button onClick={onBank} className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-700">Add Bank Account</button>
      </div>
    </div>
  );
};

export default SelectPayoutMethodPopup;
