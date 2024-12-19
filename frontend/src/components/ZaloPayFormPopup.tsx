import React, { useState } from 'react';

interface ZaloPayFormPopupProps {
  onClose: () => void;
  onAddZaloPay: (phoneNumber: string) => void;
}

const ZaloPayFormPopup: React.FC<ZaloPayFormPopupProps> = ({ onClose, onAddZaloPay }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleAdd = () => {
    if (phoneNumber) {
      onAddZaloPay(phoneNumber);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-main1-1 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-white mb-4">Add ZaloPay</h2>
        <div className="mb-4">
          <label className="block text-white mb-1">ZaloPay Phone Number</label>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mr-2">Cancel</button>
          <button onClick={handleAdd} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Add</button>
        </div>
      </div>
    </div>
  );
};

export default ZaloPayFormPopup;
