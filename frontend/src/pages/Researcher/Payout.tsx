import React, { useState } from 'react';
import PayoutSidebar from '../../components/PayoutSidebar';
import SelectPayoutMethodPopup from '../../components/SelectPayoutMethodPopup';
import PayPalFormPopup from '../../components/PayPalFormPopup';
import BankAccountFormPopup from '../../components/BankAccountFormPopup';
import { addPayoutMethod, removePayoutMethod } from '../../services/payoutService'; // Import the service functions

const Payout: React.FC = () => {
  const [showSelectPopup, setShowSelectPopup] = useState(false);
  const [showPayPalForm, setShowPayPalForm] = useState(false);
  const [showBankForm, setShowBankForm] = useState(false);

  const openSelectPopup = () => setShowSelectPopup(true);
  const closeSelectPopup = () => setShowSelectPopup(false);

  const openPayPalForm = () => {
    setShowPayPalForm(true);
    closeSelectPopup();
  };
  const closePayPalForm = () => setShowPayPalForm(false);

  const openBankForm = () => {
    setShowBankForm(true);
    closeSelectPopup();
  };
  const closeBankForm = () => setShowBankForm(false);

  const handleBack = () => {
    setShowBankForm(false);
    setShowPayPalForm(false);
    setShowSelectPopup(true);
  };

  const handleNext = () => {
    alert('Proceed to the next step');
  };

  const handleAddPayPal = async (email: string) => {
    try {
      await addPayoutMethod('PayPal', email);
      alert('PayPal added successfully');
      closePayPalForm();
    } catch (error) {
      alert('Error adding PayPal');
    }
  };

  const handleAddBankAccount = async (bankDetails: string) => {
    try {
      await addPayoutMethod('Bank', bankDetails);
      alert('Bank account added successfully');
      closeBankForm();
    } catch (error) {
      alert('Error adding bank account');
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
      <PayoutSidebar /> {/* Add the PayoutSidebar */}
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
              <div className="flex justify-between items-center mb-4">
                <span className="text-white">Default Payout Method: PayPal (example@example.com)</span>
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
              onPayPal={openPayPalForm}
              onBank={openBankForm}
            />
          )}
          {showPayPalForm && (
            <PayPalFormPopup
              onClose={closePayPalForm}
              onBack={handleBack}
              onAddPayPal={handleAddPayPal} // Pass the handler
            />
          )}
          {showBankForm && (
            <BankAccountFormPopup
              onClose={closeBankForm}
              onBack={handleBack}
              onAddBankAccount={handleAddBankAccount} // Pass the handler
            />
          )}
        </div>
      </div>
    </div>

  );
};

export default Payout;
