import React, { useState } from 'react';
import PayoutSidebar from '../../components/PayoutSidebar';
import ZaloPayFormPopup from '../../components/ZaloPayFormPopup';
import MoMoFormPopup from '../../components/MoMoFormPopup';

const Payout: React.FC = () => {
  const [payoutMethods, setPayoutMethods] = useState<{ id: number, type: string, details: string }[]>([]);
  const [showZaloPayForm, setShowZaloPayForm] = useState(false);
  const [showMoMoForm, setShowMoMoForm] = useState(false);

  const openZaloPayForm = () => {
    setShowZaloPayForm(true);
    setShowMoMoForm(false);
  };

  const closeZaloPayForm = () => {
    setShowZaloPayForm(false);
  };

  const openMoMoForm = () => {
    setShowMoMoForm(true);
    setShowZaloPayForm(false);
  };

  const closeMoMoForm = () => {
    setShowMoMoForm(false);
  };

  const handleAddZaloPay = (phoneNumber: string) => {
    const newMethod = { id: Date.now(), type: 'ZaloPay', details: phoneNumber };
    setPayoutMethods([...payoutMethods, newMethod]);
    closeZaloPayForm();
  };

  const handleAddMoMo = (phoneNumber: string) => {
    const newMethod = { id: Date.now(), type: 'MoMo', details: phoneNumber };
    setPayoutMethods([...payoutMethods, newMethod]);
    closeMoMoForm();
  };

  const handleRemovePayoutMethod = (id: number) => {
    setPayoutMethods(payoutMethods.filter(method => method.id !== id));
  };

  return (
    <div className="flex">
      <PayoutSidebar />
      <div className="flex-grow bg-main1-2 min-h-screen p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="w-full h-[70px] bg-main1-1 flex items-center justify-center mb-6 rounded-lg">
            <h1 className="text-main2-1 text-3xl font-bold">Payout</h1>
          </div>

          <div className="bg-main1-1 p-6 rounded-lg shadow-lg mb-6">
            <div className="p-6 bg-main1-1 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-4 text-white">Payout Settings</h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Pause Payments</h3>
                <div className="flex items-center mb-2">
                  <input type="checkbox" id="pausePayments" className="mr-2" />
                  <label htmlFor="pausePayments" className="text-white">
                    Pause payments for up to 9 months. By checking this box, I attest that I am not pausing payments for tax evasion purposes.
                  </label>
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-4 text-white">Payment Frequency</h3>
                <div className="flex items-center mb-2">
                  <input type="radio" id="daily" name="frequency" className="mr-2" />
                  <label htmlFor="daily" className="text-white">Daily: Payments are sent daily, regardless of the amount.</label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" id="monthly" name="frequency" className="mr-2" />
                  <label htmlFor="monthly" className="text-white">Monthly: Payments are sent on the 27th of every month, regardless of the amount.</label>
                </div>
                <div className="flex items-center mb-2">
                  <input type="radio" id="threshold" name="frequency" className="mr-2" />
                  <label htmlFor="threshold" className="text-white">Threshold amount: Payments are sent when they reach the threshold amount specified.</label>
                </div>
                <button className="bg-main2-1 text-main1-1 py-2 px-4 rounded-lg hover:bg-main2-2 mt-4" disabled>Save</button>
              </div>
            </div>

            <div className="bg-main1-1 p-6 rounded-lg shadow-lg mb-6">
              <h2 className="text-xl font-semibold mb-4 text-white">Payout Methods</h2>
              {payoutMethods.map((method) => (
                <div key={method.id} className="flex justify-between items-center mb-4">
                  <span className="text-white">{method.type}: {method.details}</span>
                  <button
                    className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700"
                    onClick={() => handleRemovePayoutMethod(method.id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className="flex">
                <button
                  className="bg-main2-1 text-main1-1 py-2 px-4 rounded-lg hover:bg-main2-2 mr-2"
                  onClick={openZaloPayForm}
                >
                  Add ZaloPay
                </button>
                <button
                  className="bg-main2-1 text-main1-1 py-2 px-4 rounded-lg hover:bg-main2-2"
                  onClick={openMoMoForm}
                >
                  Add MoMo
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showZaloPayForm && (
        <ZaloPayFormPopup
          onClose={closeZaloPayForm}
          onAddZaloPay={handleAddZaloPay}
        />
      )}
      {showMoMoForm && (
        <MoMoFormPopup
          onClose={closeMoMoForm}
          onAddMoMo={handleAddMoMo}
        />
      )}
    </div>
  );
};

export default Payout;
