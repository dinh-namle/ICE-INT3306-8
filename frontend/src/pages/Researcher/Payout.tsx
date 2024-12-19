import React, { useState, useEffect } from 'react';
import PayoutSidebar from '../../components/PayoutSidebar';
import SelectPayoutMethodPopup from '../../components/SelectPayoutMethodPopup';
import ZaloPayFormPopup from '../../components/ZaloPayFormPopup';
import MoMoFormPopup from '../../components/MoMoFormPopup';
import { addPayoutMethod, removePayoutMethod } from '../../services/payoutService';

const Payout: React.FC = () => {
  const [showSelectPopup, setShowSelectPopup] = useState(false);
  const [showZaloPayForm, setShowZaloPayForm] = useState(false);
  const [showMoMoForm, setShowMoMoForm] = useState(false);
  const [payoutMethods, setPayoutMethods] = useState<{ id: number, type: string, details: string }[]>([]);

  useEffect(() => {
    // Load initial payout methods if necessary
  }, []);

  const openSelectPopup = () => {
    setShowSelectPopup(true);
    setShowZaloPayForm(false);
    setShowMoMoForm(false);
  };

  const closeSelectPopup = () => {
    setShowSelectPopup(false);
  };

  const openZaloPayForm = () => {
    setShowZaloPayForm(true);
    setShowSelectPopup(false);
  };

  const closeZaloPayForm = () => {
    setShowZaloPayForm(false);
  };

  const openMoMoForm = () => {
    setShowMoMoForm(true);
    setShowSelectPopup(false);
  };

  const closeMoMoForm = () => {
    setShowMoMoForm(false);
  };

  const handleAddZaloPay = async () => {
    try {
      console.log("Adding ZaloPay method..."); // Logging start
      const response = await addPayoutMethod('ZaloPay', '0375753997');
      console.log("ZaloPay method added: ", response.data); // Logging response
      setPayoutMethods(response.data.payoutMethods);
      alert('ZaloPay added successfully');
      closeZaloPayForm();
    } catch (error) {
      console.log("Error adding ZaloPay method: ", error); // Logging error
      if (error instanceof Error) {
        alert('Error adding ZaloPay: ' + error.message);
      } else {
        alert('An unknown error occurred while adding ZaloPay.');
      }
    }
  };

  const handleAddMoMo = async () => {
    try {
      console.log("Adding MoMo method..."); // Logging start
      const response = await addPayoutMethod('MoMo', '0375753997');
      console.log("MoMo method added: ", response.data); // Logging response
      setPayoutMethods(response.data.payoutMethods);
      alert('MoMo added successfully');
      closeMoMoForm();
    } catch (error) {
      console.log("Error adding MoMo method: ", error); // Logging error
      if (error instanceof Error) {
        alert('Error adding MoMo: ' + error.message);
      } else {
        alert('An unknown error occurred while adding MoMo.');
      }
    }
  };

  const handleRemovePayoutMethod = async (id: number) => {
    try {
      console.log("Removing payout method..."); // Logging start
      const response = await removePayoutMethod(id);
      console.log("Payout method removed: ", response.data); // Logging response
      setPayoutMethods(response.data.payoutMethods);
      alert('Payout method removed successfully');
    } catch (error) {
      console.log("Error removing payout method: ", error); // Logging error
      if (error instanceof Error) {
        alert('Error removing payout method: ' + error.message);
      } else {
        alert('An unknown error occurred while removing payout method.');
      }
    }
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

            <div className="bg-main1-1 p-6 rounded-lg shadow-lg">
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
              <button
                className="bg-main2-1 text-main1-1 py-2 px-4 rounded-lg hover:bg-main2-2 mb-4"
                onClick={openSelectPopup}
              >
                Add Payout Method
              </button>
            </div>
          </div>

          {showSelectPopup && (
            <SelectPayoutMethodPopup
              onClose={closeSelectPopup}
              onZaloPay={openZaloPayForm}
              onMoMo={openMoMoForm}
            />
          )}
          {showZaloPayForm && (
            <ZaloPayFormPopup
              onClose={closeZaloPayForm}
              onBack={openSelectPopup}
              onAddZaloPay={handleAddZaloPay}
            />
          )}
          {showMoMoForm && (
            <MoMoFormPopup
              onClose={closeMoMoForm}
              onBack={openSelectPopup}
              onAddMoMo={handleAddMoMo}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Payout;
