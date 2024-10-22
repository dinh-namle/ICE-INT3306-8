//TODO Lam layout cho admin

import { Outlet } from "react-router-dom";

function AdminLayout(){
  return(
    <div>
      Admin
      <Outlet/>
    </div>
  );
}

export default AdminLayout;
