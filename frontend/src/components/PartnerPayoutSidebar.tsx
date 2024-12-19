import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PartnerPayoutSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-48 bg-main1-1 text-white h-screen fixed top-0 overflow-y-auto">
      <nav className="flex flex-col p-4">
        <Link
          to="/partner/payout"
          className={`p-2 rounded ${location.pathname === '/partner/payout' ? 'bg-main2-2' : ''}`}
        >
          Partner Payout
        </Link>
        <Link
          to="/partner/paymenthistory"
          className={`p-2 rounded ${location.pathname === '/partner/paymenthistory' ? 'bg-main2-2' : ''}`}
        >
          Payment History
        </Link>
      </nav>
    </div>
  );
};

export default PartnerPayoutSidebar;
