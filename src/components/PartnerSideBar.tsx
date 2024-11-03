import { FiTarget } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

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
      <Link className={`py-4 ${location.pathname === "/overview" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"/programs"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><FiTarget className="stroke-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Overview</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partnerprograms" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"/leaderboard"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><MdLeaderboard className="fill-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Programs</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partnerreports" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"#"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><FiTarget className="stroke-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Reports</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partnerinbox" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"#"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><FiTarget className="stroke-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Inbox</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
      <Link className={`py-4 ${location.pathname === "/partneraccout" ? "bg-main2-2" : "bg-main1-1"} w-[80%] rounded-lg flex flex-col items-center`} to={"/profile"}>
        <div className="flex flex-row w-full">
          <div className="basis-[30%] flex justify-center"><FiTarget className="stroke-white size-6" /></div>
          <div className="basis-[50%] flex justify-start"><span className="text-white">Account</span></div>
          <div className="basis-[20%] flex justify-center"><span className="bg-main2-2 text-white text-center rounded-full w-[30px]">13</span></div>
        </div>
      </Link>
    </div>
  );
}

export default PartnerSideBar;