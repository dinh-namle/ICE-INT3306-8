import React from 'react';

const Register = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B121F]">
      <div className="w-full max-w-md p-8 space-y-4 bg-[#182232] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#FFFFFF]">
          Create a <span className="text-[#9FEF00] text-4xl">I</span><span className="text-[#FFFFFF] text-4xl">CE</span> account
        </h2>

        {/* Phần nhập email */}
        <div>
          <label className="text-sm font-semibold text-[#A4B1CD] font-bold">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[##A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
          />
        </div>

        {/* Phần nhập mật khẩu */}
        <div className="mt-4">
          <label className="text-sm font-semibold text-[#A4B1CD] font-bold">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[##A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
          />
        </div>
        <div className="mt-4">
          <label className="text-sm font-semibold text-[#A4B1CD] font-bold">Confirm Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[##A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
          />
        </div>

        {/* Yêu cầu mật khẩu */}
        <div className="mt-4 text-sm text-[#A4B1CD]">
          <p className="font-semibold font-bold">Your password must contain:</p>
          <ul className="ml-4 list-disc text-[#9FEF00]">
            <li>At least 10 characters</li>
            <li>At least one uppercase character</li>
            <li>At least one special character</li>
            <li>At least one number</li>
          </ul>
        </div>

        {/* Nút Continue as Partner và Continue as Research */}
        <button
          type="button"
          className="w-full px-4 py-2 mt-4 font-semibold text-[#0B121F] bg-[#9FEF00] border border-[##A4B1CD] rounded-md hover:bg-[##A4B1CD]"
        >
          Continue as Partner
        </button>
        <button
          type="button"
          className="w-full px-4 py-2 mt-2 font-semibold text-[#0B121F] bg-[#9FEF00] border border-[##A4B1CD] rounded-md hover:bg-[##A4B1CD]"
        >
          Continue as Research
        </button>

        {/* OR và các nút đăng ký với Google hoặc Github */}
        <div className="flex items-center mt-4 text-[#A4B1CD]">
          <div className="flex-grow border-t border-[##A4B1CD]" />
          <span className="mx-2">OR</span>
          <div className="flex-grow border-t border-[##A4B1CD]" />
        </div>

        <button className="w-full px-4 py-2 mt-2 text-[#A4B1CD] font-bold bg-[#182232] border border-[##A4B1CD] rounded-md hover:bg-[##A4B1CD]">
          Sign up with Google
        </button>
        <button className="w-full px-4 py-2 mt-2 text-[#A4B1CD] font-bold bg-[#182232] border border-[##A4B1CD] rounded-md hover:bg-[##A4B1CD]">
          Sign up with Github
        </button>

        {/* Đường dẫn tới trang đăng nhập */}
        <p className="mt-4 text-center text-[#A4B1CD]">
          Already have a ICE account? <a href="#" className="text-[#9FEF00] hover:underline">Sign in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
