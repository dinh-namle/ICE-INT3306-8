import React from 'react';

const ResearcherRegister = () => {
  // Generate options for days, months, and years
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B121F]">
      <div className="w-full max-w-md p-8 space-y-4 bg-[#182232] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#FFFFFF]">
          Create a <span className="text-[#9FEF00]">I</span><span className="text-[#FFFFFF]">CE</span> account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-[#A4B1CD] font-bold">Username</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">First name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">Last name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-[#A4B1CD] font-bold">Country</label>
            <select
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00] text-center"
            >
              <option value="" className="text-[#A4B1CD]">Select Country</option>
              {/* Add country options here */}
            </select>
          </div>
          <div>
            <label className="text-sm text-[#A4B1CD] font-bold">Date of birth</label>
            <div className="flex space-x-4">
              <select className="w-1/3 px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00] text-center">
                <option value="" className="text-[#A4B1CD]">Day</option>
                {days.map(day => (
                  <option key={day} value={day} className="text-[#A4B1CD]">{day}</option>
                ))}
              </select>
              <select className="w-1/3 px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00] text-center">
                <option value="" className="text-[#A4B1CD]">Month</option>
                {months.map((month, index) => (
                  <option key={index} value={index + 1} className="text-[#A4B1CD]">{month}</option>
                ))}
              </select>
              <select className="w-1/3 px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00] text-center">
                <option value="" className="text-[#A4B1CD]">Year</option>
                {years.map(year => (
                  <option key={year} value={year} className="text-[#A4B1CD]">{year}</option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex items-center text-[#A4B1CD]">
            <input type="checkbox" className="mr-2 border-[#A4B1CD]" />
            <label>
              I accept the <a href="#" className="text-[#9FEF00] hover:underline">user Agreement</a> and the <a href="#" className="text-[#9FEF00] hover:underline">Privacy Notice</a>
            </label>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-[#A4B1CD] bg-[#182232] border border-[#A4B1CD] rounded-md hover:bg-[#A4B1CD]"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResearcherRegister;
