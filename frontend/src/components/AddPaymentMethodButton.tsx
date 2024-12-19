import React, { useState } from 'react';

interface AddPaymentMethodButtonProps {
  onAdd: (type: string, details: string) => void;
}

const AddPaymentMethodButton: React.FC<AddPaymentMethodButtonProps> = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [type, setType] = useState('');
  const [details, setDetails] = useState('');

  const handleAdd = () => {
    if (type && details) {
      onAdd(type, details);
      setShowForm(false);
      setType('');
      setDetails('');
    }
  };

  return (
    <div>
      <button
        className="bg-main2-1 text-main1-1 py-2 px-4 rounded-lg hover:bg-main2-2 mb-4"
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add New Payment Method'}
      </button>
      {showForm && (
        <div className="mt-4">
          <input
            type="text"
            placeholder="Payment Type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            placeholder="Payment Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className="mb-2 p-2 border border-gray-300 rounded"
          />
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
            onClick={handleAdd}
          >
            Add Payment Method
          </button>
        </div>
      )}
    </div>
  );
};

export default AddPaymentMethodButton;
