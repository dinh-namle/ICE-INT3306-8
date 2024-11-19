import React from 'react';

const PartnerRegister = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B121F]">
      <div className="w-full max-w-md p-8 space-y-4 bg-[#182232] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#FFFFFF]">
          Create a <span className="text-[#9FEF00] text-4xl">I</span><span className="text-[#FFFFFF] text-4xl">CE</span> account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-[#A4B1CD] font-bold">Business Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">First Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">Last Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              />
            </div>
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">Job Title</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">Company</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              />
            </div>
          </div>
          <div>
            <label className="text-sm text-[#A4B1CD] font-bold">Reason for Contact</label>
            <input
              type="text"
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
            />
          </div>
          <div className="flex space-x-4">
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">Phone</label>
              <input
                type="tel"
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              />
            </div>
            <div className="flex-1">
              <label className="text-sm text-[#A4B1CD] font-bold">Country</label>
              <select
                className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
              >
                <option value="" className="text-[#A4B1CD]">Select Country</option>
                {/* Add country options here */}
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
            Continue
          </button>
          <p className="text-center text-[#A4B1CD]">
            Already have a ICE account? <a href="http://localhost:3000/login" className="text-[#9FEF00] hover:underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default PartnerRegister;
