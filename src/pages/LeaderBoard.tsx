import { useNavigate } from 'react-router-dom'
import { MdLeaderboard } from "react-icons/md";

const LeaderBoard = () => {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }
  
  return (
    <div className="bg-main1-2 min-h-screen w-full">
      <div className="mt-0 ml-[10px] w-[1220px] h-[70px] bg-main1-1 flex items-center justify-center mx-auto">
        <h1 className="text-main2-1 pl-[50px] text-3xl font-bold">LeaderBoards</h1>
      </div> 

      <div className="mt-[15px] ml-[10px] w-[1220px] flex flex-col items-start justify-center"> 
        <div className="flex items-center pl-[60px] h-[35px]"> 
          <MdLeaderboard className="text-white text-3xl mr-2" /> 
          <img src="/ICE.png" alt="logo_ice" className="h-[20px] object-contain my-8"/>
          <span className="text-main2-1 text-3xl ml-1 font-semibold"> LeaderBoards</span>
        </div>
        <div className="text-main1-3 mt-[1px] ml-[50px]"> 
          All leaderboards are based on the selected time period.
        </div>
      </div>

      <div className="flex flex-row">
        <div className="mt-[10px] ml-[30px] bg-main1-1 w-[700px] h-[650px] flex flex-col">
          <div className="mt-[10px]"><span className="text-slate-200 text-[20px] ml-[40px] font-semibold">Highest Reputation</span></div>
          <div className="ml-[30px]"><span className="text-main1-3">Ranking is calculated based on reputation earned.</span></div>
          
          <div className="mx-auto mt-[40px] h-[500px]">
            <table className="w-[680px] p-[10px] border border-gray-600">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b" style={{height: '40px', width: '40px'}}></th> {/* Đây là ID */}
                  <th className="py-2 px-4 border-b" style={{ height: '40px', width: '320px' }}></th> {/* Đây là tên */}
                  <th className="py-2 px-4 border-b"><span className="text-main2-1 font-medium">Reputation</span></th>
                  <th className="py-2 px-4 border-b"><span className="text-main2-1 font-medium">Signal</span></th>
                  <th className="py-2 px-4 border-b"><span className="text-main2-1 font-medium">Impact</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-center text-white">1</td>
                  <td className="py-2 px-4 border-b text-white">Player 1</td>
                  <td className="py-2 px-4 border-b text-center text-white">100</td>
                  <td className="py-2 px-4 border-b text-center text-white">120</td>
                  <td className="py-2 px-4 border-b text-center text-white">130</td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
  
          <div className="flex items-center justify-center">
            <a href=""><span className="text-main2-1 underline">View all ranking</span></a>
          </div>
        </div>

        <div className="mt-[10px] ml-[30px] bg-main1-1 w-[450px] h-[650px] flex flex-col">
          <div className="mt-[10px]"><span className="text-slate-200 text-[20px] ml-[40px] font-semibold">Threat Categories</span></div>
          <div className="ml-[30px]"><span className="text-main1-3">Ranking is calculated based on the volume of submissions for each error category.</span></div>
          
          <div className="mx-auto mt-[19px] h-[500px]">
            <table className="w-[420px] p-[10px] border border-gray-600">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b" style={{height: '40px', width: '30px'}}></th> {/* Đây là ID */}
                  <th className="py-2 px-4 border-b" style={{ height: '40px', width: '200px' }}><span className="text-main2-1 font-medium">Type Error</span></th>
                  <th className="py-2 px-4 border-b"><span className="text-main2-1 font-medium">Quantity</span></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b text-center text-white">1</td>
                  <td className="py-2 px-4 border-b text-center text-white">Type1</td>
                  <td className="py-2 px-4 border-b text-center text-white">100</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center justify-center">
            <a href=""><span className="text-main2-1 underline">View all ranking</span></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;