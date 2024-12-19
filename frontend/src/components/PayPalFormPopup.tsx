import React, { useState } from 'react';
import Modal from '../components/Modal';

interface PayPalFormPopupProps {
  onClose: () => void;
  onBack: () => void;
  onAddPayPal: (email: string) => void;
}

const PayPalFormPopup: React.FC<PayPalFormPopupProps> = ({ onClose, onBack, onAddPayPal }) => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onAddPayPal(email);
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Add PayPal</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">PayPal Email:</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={onBack} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">Back</button>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">Add PayPal</button>
        </div>
      </form>
    </Modal>
  );
};

export default PayPalFormPopup;
