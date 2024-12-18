import React, { useState } from 'react';
import Modal from '../components/Modal';

interface BankAccountFormPopupProps {
  onClose: () => void;
  onBack: () => void;
  onNext: (userId: number, bankDetails: string) => void;
}

const BankAccountFormPopup: React.FC<BankAccountFormPopupProps> = ({ onClose, onBack, onNext }) => {
  const [accountHolderName, setAccountHolderName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [bankName, setBankName] = useState<string>('');
  const userId = 1; // Replace with the actual user ID

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const bankDetails = JSON.stringify({ accountHolderName, accountNumber, bankName });
    onNext(userId, bankDetails);
  };

  return (
    <Modal onClose={onClose}>
      <h2 className="text-xl font-semibold mb-4">Add Bank Account</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Account Holder Name:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={accountHolderName}
            onChange={(e) => setAccountHolderName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Account Number:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Bank Name:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded mt-1"
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            required
          />
        </div>
        <div className="flex justify-between">
          <button type="button" onClick={onBack} className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700">Back</button>
          <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Next</button>
        </div>
      </form>
    </Modal>
  );
};

export default BankAccountFormPopup;
