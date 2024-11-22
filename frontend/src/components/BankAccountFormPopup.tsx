import React, { useState } from 'react';

interface BankAccountFormPopupProps {
  onClose: () => void;
  onBack: () => void;
  onNext: () => void;
}

const BankAccountFormPopup: React.FC<BankAccountFormPopupProps> = ({ onClose, onBack, onNext }) => {
  const [accountHolderName, setAccountHolderName] = useState<string>('');
  const [accountNumber, setAccountNumber] = useState<string>('');
  const [bankName, setBankName] = useState<string>('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Account Holder Name:', accountHolderName);
    console.log('Account Number:', accountNumber);
    console.log('Bank Name:', bankName);
    onNext();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-lg relative w-96">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">&times;</button>
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
      </div>
    </div>
  );
};

export default BankAccountFormPopup;
