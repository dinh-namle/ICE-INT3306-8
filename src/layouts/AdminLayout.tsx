import { Outlet } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";

function AdminLayout(){
  return(
    <div className="flex flex-row">
      <AdminSideBar/>
      <Outlet/>
    </div>
  );
}

export default AdminLayout;
