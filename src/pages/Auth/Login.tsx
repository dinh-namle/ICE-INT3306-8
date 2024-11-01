

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#0B121F]">
      <div className="w-full max-w-md p-8 space-y-4 bg-[#182232] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-[#FFFFFF]">
          Sign in to the <span className="text-[#9FEF00]">I</span><span className="text-[#FFFFFF]">CE</span>
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm text-[#8799B5]">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#1E293A] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
            />
          </div>
          <div>
            <label className="text-sm text-[#8799B5]">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 bg-[#182232] text-[#FFFFFF] border border-[#1E293A] rounded-md focus:outline-none focus:ring-2 focus:ring-[#9FEF00]"
            />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-[#8799B5]">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <a href="#" className="text-sm text-[#8799B5] hover:underline">
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-[#8799B5] bg-[#182232] border border-[#1E293A] rounded-md hover:bg-[#1E293A]"
          >
            Sign in
          </button>
        </form>
        <div className="flex items-center justify-center space-x-2">
          <span className="h-px bg-[#1E293A] w-1/4"></span>
          <span className="text-sm text-[#8799B5]">or</span>
          <span className="h-px bg-[#1E293A] w-1/4"></span>
        </div>
        <button className="w-full px-4 py-2 mt-2 font-semibold text-[#FFFFFF] bg-[#182232] border border-[#1E293A] rounded-md hover:bg-[#1E293A]">
          Sign in with Google
        </button>
        <button className="w-full px-4 py-2 mt-2 font-semibold text-[#FFFFFF] bg-[#182232] border border-[#1E293A] rounded-md hover:bg-[#1E293A]">
          Sign in with GitHub
        </button>
        <p className="text-sm text-center text-[#8799B5]">
          New to ICE?{' '}
          <a href="#" className="text-[#9FEF00] hover:underline">
            Create Account
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
