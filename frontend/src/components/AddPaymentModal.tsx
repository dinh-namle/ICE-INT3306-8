import React, { useState } from 'react';

interface AddPaymentModalProps {
  onClose: () => void;
  onAdd: (hacker: string, payday: string, reportId: string, amount: string, status: string) => void;
}

const AddPaymentModal: React.FC<AddPaymentModalProps> = ({ onClose, onAdd }) => {
  const [hacker, setHacker] = useState('');
  const [payday, setPayday] = useState('');
  const [reportId, setReportId] = useState('');
  const [amount, setAmount] = useState('');
  const [status, setStatus] = useState('Pending');

  const handleAdd = () => {
    if (hacker && payday && reportId && amount && status) {
      onAdd(hacker, payday, reportId, amount, status);
      onClose();
    }
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const date = new Date(e.target.value);
    const formattedDate = date.toLocaleDateString('en-GB', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    }).replace(/ /g, ' ');
    setPayday(formattedDate);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-main1-1 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl font-bold text-white mb-4">Add New Payment</h2>
        <div className="mb-4">
          <label className="block text-white mb-1">Hacker</label>
          <input
            type="text"
            value={hacker}
            onChange={(e) => setHacker(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1">Payday</label>
          <input
            type="date"
            onChange={handleDateChange}
            className="w-full p-2 border border-gray-300 rounded"
          />
          {payday && <p className="text-white mt-2">Selected Date: {payday}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1">Report ID</label>
          <input
            type="text"
            value={reportId}
            onChange={(e) => setReportId(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1">Amount</label>
          <input
            type="text"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-white mb-1">Status</label>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
          >
            <option value="Pending">Pending</option>
            <option value="Success">Success</option>
          </select>
        </div>
        <div className="flex justify-end">
          <button onClick={onClose} className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 mr-2">Cancel</button>
          <button onClick={handleAdd} className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700">Add</button>
        </div>
      </div>
    </div>
  );
};

export default AddPaymentModal;
