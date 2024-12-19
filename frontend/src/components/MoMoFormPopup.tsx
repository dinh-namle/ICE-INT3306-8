import React, { useState } from 'react';
import Modal from '../components/Modal';

interface MoMoFormPopupProps {
  onClose: () => void;
  onBack: () => void;
  onAddMoMo: (phoneNumber: string) => void;
}

const MoMoFormPopup: React.FC<MoMoFormPopupProps> = ({ onClose, onBack, onAddMoMo }) => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddMoMo(phoneNumber);
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Add MoMo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">MoMo Phone Number:</label>
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
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Add MoMo</button>
        </div>
      </form>
    </Modal>
  );
};

export default MoMoFormPopup;
