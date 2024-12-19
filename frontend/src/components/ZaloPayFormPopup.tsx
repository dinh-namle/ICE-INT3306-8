import React, { useState } from 'react';
import Modal from '../components/Modal';

interface ZaloPayFormPopupProps {
  onClose: () => void;
  onBack: () => void;
  onAddZaloPay: (phoneNumber: string) => void;
}

const ZaloPayFormPopup: React.FC<ZaloPayFormPopupProps> = ({ onClose, onBack, onAddZaloPay }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddZaloPay(phoneNumber);
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Add ZaloPay</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">ZaloPay Phone Number:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={onBack} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">Back</button>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add ZaloPay</button>
        </div>
      </form>
    </Modal>
  );
};

export default ZaloPayFormPopup;
