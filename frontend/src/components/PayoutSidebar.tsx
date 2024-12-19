import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PayoutSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-48 bg-main1-1 text-white h-screen fixed top-0 overflow-y-auto">
      <nav className="flex flex-col p-4">
        <Link
          to="/payout"
          className={`p-2 rounded ${location.pathname === '/payout' ? 'bg-main2-2' : ''}`}
        >
          Payout
        </Link>
        <Link
          to="/rewards"
          className={`p-2 rounded ${location.pathname === '/rewards' ? 'bg-main2-2' : ''}`}
        >
          Rewards
        </Link>
      </nav>
    </div>
  );
};

export default PayoutSidebar;
