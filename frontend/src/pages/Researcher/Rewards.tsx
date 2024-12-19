import React from 'react';
import PayoutSidebar from '../../components/PayoutSidebar';
import RewardTable from '../../components/RewardTable';

const Rewards: React.FC = () => {
  return (
    <div className="flex">
      <PayoutSidebar /> {/* Add the PayoutSidebar */}
      <div className="bg-main1-2 min-h-screen w-full p-6">
        <div className="container mx-auto">
        <div className="w-full h-[70px] bg-main1-1 flex items-center justify-center mb-6 rounded-lg"> <h1 className="text-main2-1 text-3xl font-bold">Rewards</h1>
        </div>
          <div className="bg-main1-1 text-white p-4 rounded">
            <p className="mb-4">Our rewards program incentivizes responsible disclosure of vulnerabilities. Below is your summary and detailed information about earnings, payouts, and adjustments:</p>
            <RewardTable />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
