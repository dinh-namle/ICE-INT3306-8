import React, { useState } from 'react';
import PartnerPayoutSidebar from '../../components/PartnerPayoutSidebar';
import PaymentHistoryItem from '../../components/PaymentHistoryItem';
import AddPaymentModal from '../../components/AddPaymentModal';

const PaymentHistory: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [paymentHistoryData, setPaymentHistoryData] = useState([
    {
      hacker: 'logic-breaker',
      payday: '19 March 2024',
      reportId: '#1623672',
      amount: '$300',
      status: 'Pending'
    },
    {
      hacker: 'godiego',
      payday: '21 August 2024',
      reportId: '#1624167',
      amount: '$250',
      status: 'Success'
    },
    {
      hacker: 'm0chan',
      payday: '15 June 2024',
      reportId: '#1617532',
      amount: '$350',
      status: 'Pending'
    },
    {
      hacker: 'd0xing',
      payday: '09 June 2024',
      reportId: '#1615521',
      amount: '$325',
      status: 'Success'
    },
    {
      hacker: 'arielrachamim',
      payday: '19 July 2024',
      reportId: '#1611526',
      amount: '$200',
      status: 'Success'
    },
  ]);

  const handleAddPayment = (hacker: string, payday: string, reportId: string, amount: string, status: string) => {
    setPaymentHistoryData([...paymentHistoryData, { hacker, payday, reportId, amount, status }]);
  };

  return (
    <div className="bg-main1-2 min-h-screen w-full flex">
      <PartnerPayoutSidebar />
      <div className="flex-grow">
        <div className="bg-main1-1 w-full h-[70px] flex items-center justify-center">
          <h1 className="text-main2-1 text-3xl font-bold">All Payments</h1>
        </div>
        <div className="container mx-auto p-4 max-w-6xl">
          <div className="flex justify-between mb-4">
            <div className="bg-main1-1 text-white p-4 rounded w-1/2 mr-2">
              <h2 className="text-xl font-bold">Remaining Balance</h2>
              <p className="text-3xl">$1,200</p>
            </div>
            <div className="bg-main1-1 text-white p-4 rounded w-1/2 ml-2">
              <h2 className="text-xl font-bold">Default Payment Method</h2>
              <p className="text-3xl">PayPal</p>
            </div>
          </div>
          <div className="bg-main1-1 text-white p-4 rounded mt-4">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-bold">Here is the history of payments made to researchers:</p>
              <button
                onClick={() => setShowModal(true)}
                className="bg-main2-1 text-main1-1 p-2 rounded"
              >
                Add New Payment
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-main1-1 text-white border border-gray-200 rounded-lg text-center">
                <thead>
                  <tr className="bg-main1-2">
                    <th className="p-2">Hacker</th>
                    <th className="p-2">Payday</th>
                    <th className="p-2">Report ID</th>
                    <th className="p-2">Amount</th>
                    <th className="p-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {paymentHistoryData.map((item, index) => (
                    <PaymentHistoryItem
                      key={index}
                      hacker={item.hacker}
                      payday={item.payday}
                      reportId={item.reportId}
                      amount={item.amount}
                      status={item.status}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <AddPaymentModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddPayment}
        />
      )}
    </div>
  );
};

export default PaymentHistory;
