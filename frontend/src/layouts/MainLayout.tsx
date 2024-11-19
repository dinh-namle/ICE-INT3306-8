import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";

function MainLayout(){
  return (
    <div className="flex flex-row">
      <SideBar />
      <div className="ml-[60px] w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default MainLayout;