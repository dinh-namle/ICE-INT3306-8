import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PartnerPayoutSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-48 bg-gray-800 text-white h-screen">
      <nav className="flex flex-col p-4">
        <Link
          to="/partner/payout"
          className={`p-2 rounded ${location.pathname === '/partner/payout' ? 'bg-gray-700' : ''}`}
        >
          Partner Payout
        </Link>
        <Link
          to="/partner/paymenthistory"
          className={`p-2 rounded ${location.pathname === '/partner/paymenthistory' ? 'bg-gray-700' : ''}`}
        >
          Payment History
        </Link>
      </nav>
    </div>
  );
};

export default PartnerPayoutSidebar;
