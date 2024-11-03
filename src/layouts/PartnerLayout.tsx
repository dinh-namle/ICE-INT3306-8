import PartnerSideBar from "../components/PartnerSideBar";
import { Outlet } from "react-router-dom";

function PartnerLayout(){
  return (
    <div className="flex flex-row">
      <PartnerSideBar />
      <div className="ml-[60px] w-full">
        <Outlet />
      </div>
    </div>
  );
}

export default PartnerLayout;