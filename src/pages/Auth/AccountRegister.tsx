const AccountRegister = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B121F]">
      <div className="w-full max-w-md p-8 space-y-4 bg-[#182232] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#FFFFFF] ">
          Create a <span className="text-[#9FEF00] font-bold text-4xl">I</span><span className="text-[#FFFFFF] font-bold text-4xl">CE</span> account
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-[#A4B1CD] font-bold">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
            />
          </div>
          <div>
            <label className="text-sm text-[#A4B1CD] font-bold">Confirm password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#A4B1CD] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
            />
          </div>
          <div className="text-sm text-[#A4B1CD] font-bold" style={{ lineHeight: '2' }}>
            <p>Your password must contain:</p>
            <ul className="space-y-1 text-[#9FEF00]" style={{ lineHeight: '1.5' }}>
              <li> At least 10 characters</li>
              <li> At least one uppercase character</li>
              <li> At least one special character</li>
              <li> At least one number</li>
            </ul>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-[#A4B1CD] bg-[#182232] border border-[#A4B1CD] rounded-md hover:bg-[#1E293A]"
          >
            Create Account
          </button>
        </form>
        <p className="text-sm text-center text-[#A4B1CD]">
          Already have an ICE account?{' '}
          <a href="#" className="text-[#9FEF00] hover:underline font-bold" >
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
};

export default AccountRegister;
