import { Outlet } from "react-router-dom";
import { AdminSideBar } from "../components";

function AdminLayout(){
  return(
    <div className="flex flex-row">
      <AdminSideBar/>
      <Outlet/>
    </div>
  );
}

export default AdminLayout;
