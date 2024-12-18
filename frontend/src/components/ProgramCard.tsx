import { FaBug, FaFaceSmile, FaPeopleGroup } from "react-icons/fa6";

const ProgramCard: React.FC<{}> = () => {
  return (
    <div className="flex flex-col w-[300px] rounded-lg  bg-main1-1">
      <div className="flex flex-row w-full h-12 mx-6 my-2 items-center justify-start">
        <div className="relative flex items-center justify-center bg-white overflow-hidden rounded-full w-8">
          <img src="/Logo_UET.png" alt="logo" className="w-full h-full"/>
        </div>
        <div className="m-full mx-4 truncate overflow-hidden whitespace-nowrap font-sans font-medium text-white">Công ty cổ phần A</div>
      </div>
      <hr className="border-t-2 border-main1-3"/>
      <div className="flex flex-col h-[143px] gap-6 mx-6 mt-12 overflow-hidden">
        <div className="text-white font-bold font-sans">Bug Bounty Program</div>
        <div className="flex flex-row flex-wrap gap-y-2 gap-x-2">
          
          <div className="flex flex-row space-x-1 bg-main2-2 px-2 py-1 text-white text-xs font-normal rounded-3xl">
            <div>Domain</div>
            <div className="h-full w-px bg-white"></div>
            <div>12</div>
          </div>
          <div className="flex flex-row space-x-1 bg-main2-2 px-2 py-1 text-white text-xs font-normal rounded-3xl">
            <div>Domain</div>
            <div className="h-full w-px bg-white"></div>
            <div>12</div>
          </div>
          <div className="flex flex-row space-x-1 bg-main2-2 px-2 py-1 text-white text-xs font-normal rounded-3xl">
            <div>Domainfdsfsdfsdfsdfsdfsd</div>
            <div className="h-full w-px bg-white"></div>
            <div>12</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col mx-6">
        <div className="text-main2-2 font-extrabold text-xl">$300 - &250k</div>
        <div className="flex flex-row justify-start items-center gap-x-12">
          <div className="flex flex-row items-center gap-x-2">
            <FaBug className="fill-main1-3" />
            <div className="text-main1-3 font-sans font-medium">12</div>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <FaPeopleGroup className="fill-main1-3" />
            <div className="text-main1-3 font-sans font-medium">12</div>
          </div>
          <div className="flex flex-row items-center gap-x-2">
            <FaFaceSmile className="fill-main1-3" />
            <div className="text-main1-3 font-sans font-medium">12%</div>
          </div>
        </div>
        <div className="flex justify-center my-5">
          <button className="bg-main1-1 rounded-lg border-2 border-main2-1 text-main2-1 px-16 py-1 hover:bg-main2-1 hover:text-main1-2 hover:font-bold" onClick={null}>See details</button>
        </div>
      </div>
    </div>
  );
}

export default ProgramCard;