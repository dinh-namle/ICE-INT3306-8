import React, { useState } from 'react';
import PartnerPayoutSidebar from '../../components/PartnerPayoutSidebar';
import SelectPayoutMethodPopup from '../../components/SelectPayoutMethodPopup';
import ZaloPayFormPopup from '../../components/ZaloPayFormPopup';
import MoMoFormPopup from '../../components/MoMoFormPopup';
import { addPayoutMethod, removePayoutMethod } from '../../services/payoutService'; // Import the service functions

const PartnerPayout: React.FC = () => {
  const [showSelectPopup, setShowSelectPopup] = useState(false);
  const [showZaloPayForm, setShowZaloPayForm] = useState(false);
  const [showMoMoForm, setShowMoMoForm] = useState(false);

  const openSelectPopup = () => setShowSelectPopup(true);
  const closeSelectPopup = () => setShowSelectPopup(false);

  const openZaloPayForm = () => {
    setShowZaloPayForm(true);
    closeSelectPopup();
  };
  const closeZaloPayForm = () => setShowZaloPayForm(false);

  const openMoMoForm = () => {
    setShowMoMoForm(true);
    closeSelectPopup();
  };
  const closeMoMoForm = () => setShowMoMoForm(false);

  const handleBack = () => {
    setShowMoMoForm(false);
    setShowZaloPayForm(false);
    setShowSelectPopup(true);
  };

  const handleNext = () => {
    alert('Proceed to the next step');
  };

  const handleAddZaloPay = async (phoneNumber: string) => {
    try {
      await addPayoutMethod('ZaloPay', phoneNumber);
      alert('ZaloPay added successfully');
      closeZaloPayForm();
    } catch (error) {
      alert('Error adding ZaloPay');
    }
  };

  const handleAddMoMo = async (phoneNumber: string) => {
    try {
      await addPayoutMethod('MoMo', phoneNumber);
      alert('MoMo added successfully');
      closeMoMoForm();
    } catch (error) {
      alert('Error adding MoMo');
    }
  };

  const handleRemovePayoutMethod = async (id: number) => {
    try {
      await removePayoutMethod(id);
      alert('Payout method removed successfully');
    } catch (error) {
      alert('Error removing payout method');
    }
  };

  return (
    <div className="flex">
      <PartnerPayoutSidebar />
      <div className="flex-grow bg-main1-2 min-h-screen p-6">
        <div className="container mx-auto max-w-6xl">
          <div className="w-full h-[70px] bg-main1-1 flex items-center justify-center mb-6 rounded-lg">
            <h1 className="text-main2-1 text-3xl font-bold">Partner Payout</h1>
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
              <div className="flex justify-between items-center mb-4">
                <span className="text-white">Default Payout Method: ZaloPay (example@zalopay.vn)</span>
                <button className="bg-sub-1 text-white py-2 px-4 rounded-lg hover:bg-red-700" onClick={() => handleRemovePayoutMethod(1)}>Remove</button>
              </div>
              <button
                className="bg-main2-1 text-main1-1 py-2 px-4 rounded-lg hover:bg-main2-2"
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
              onBack={handleBack}
              onAddZaloPay={handleAddZaloPay} // Pass the handler
            />
          )}
          {showMoMoForm && (
            <MoMoFormPopup
              onClose={closeMoMoForm}
              onBack={handleBack}
              onAddMoMo={handleAddMoMo} // Pass the handler
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerPayout;
