import { Outlet } from "react-router-dom";
import { Login } from "../pages/Auth";

function AuthLayout(){
  return (
    <div>
      <Outlet/>
    </div>
  );
}

export default AuthLayout;