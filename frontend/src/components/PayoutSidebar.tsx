import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const PayoutSidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-48 bg-gray-800 text-white h-screen">
      <nav className="flex flex-col p-4">
        <Link
          to="/payout"
          className={`p-2 rounded ${location.pathname === '/payout' ? 'bg-gray-700' : ''}`}
        >
          Payout
        </Link>
        <Link
          to="/rewards"
          className={`p-2 rounded ${location.pathname === '/rewards' ? 'bg-gray-700' : ''}`}
        >
          Rewards
        </Link>
      </nav>
    </div>
  );
};

export default PayoutSidebar;
