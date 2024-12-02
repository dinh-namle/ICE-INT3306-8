import { MdOutlineAccountCircle } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";
import { LuClipboardList } from "react-icons/lu";
import { CiSettings } from "react-icons/ci";
import { AiOutlineAppstore } from "react-icons/ai";

const PartnerSideBar: React.FC = () => {
  const location = useLocation();

  const PartnerSideBarStyle: React.CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    height: '100vh',
    overflowY: 'auto',
  };

  return (
    <div style={PartnerSideBarStyle} className="flex flex-col bg-main1-1 h-dvh w-[250px] items-center">
      <img src="/ICE.png" alt="logo_ice" className="h-[30px] object-contain my-8" />
      <Link className={`py-4 ${location.pathname === "/partner/overview" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"#"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><AiOutlineAppstore className="fill-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Overview</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partner/programs" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"#"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><LuClipboardList className="fill-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Programs</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partner/reports" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"#"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><IoTimeOutline className="stroke-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Reports</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partner/inbox" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"#"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><CiSettings className="fill-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Inbox</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partner/account" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"#"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><MdOutlineAccountCircle className="fill-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Account</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
    </div>
  );
}

export default PartnerSideBar;