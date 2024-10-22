import { FiTarget } from "react-icons/fi";
import { FaUserCircle } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const SideBar: React.FC = () => {

  const location = useLocation();

  return (
    <div className="flex flex-col bg-main1-1 h-dvh w-[60px] items-center">
      <img src="/ICE.png" alt="logo_ice" className="h-[18px] object-contain my-8"/>
      <Link className={`py-4 ${location.pathname ==="/programs"? "bg-main2-1" : "bg-main1-1"} bg-main2-1 w-full flex flex-col items-center`} to={"#"}>
        <FiTarget className="stroke-white size-6" />
      </Link>
      <Link className={`py-4 ${location.pathname ==="/leaderboard"? "bg-main2-1" : "bg-main1-1"} w-full flex flex-col items-center`} to={"#"}>
        <MdLeaderboard className="fill-white size-6" />
      </Link>
      <Link className={`py-4 ${location.pathname ==="/hacktivity"? "bg-main2-1" : "bg-main1-1"} w-full flex flex-col items-center`} to={"#"}>
        <IoIosPaper className="fill-white size-6" />
      </Link>
      <Link className={`py-4 ${location.pathname ==="/inbox"? "bg-main2-1" : "bg-main1-1"} w-full flex flex-col items-center`} to={"#"}>
        <IoMail className="fill-white size-6" />
      </Link>
      <Link className={`py-4 ${location.pathname ==="/user"? "bg-main2-1" : "bg-main1-1"} w-full flex flex-col items-center`} to={"#"}>
        <FaUserCircle className="fill-white size-6" />
      </Link>
    </div>
  );
}

export default SideBar;