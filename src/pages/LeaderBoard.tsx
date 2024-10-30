import { useNavigate } from 'react-router-dom';
import { MdLeaderboard } from "react-icons/md";
import AddTable from '../components/AddTable';

const LeaderBoard = () => {
  const navigate = useNavigate();

  const data = [
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 },

  ];

  return (
    <div className="bg-main1-2 min-h-screen w-full">
      <div className="mt-0 ml-[10px] w-full h-[70px] bg-main1-1 flex items-center justify-center mx-auto">
        <h1 className="text-main2-1 pl-[50px] text-3xl font-bold">LeaderBoards</h1>
      </div>

      <div className="mt-[15px] ml-[10px] w-full flex flex-col items-start justify-center"> 
        <div className="flex items-center pl-[60px] h-[35px]"> 
          <MdLeaderboard className="text-white text-3xl mr-2" /> 
          <img src="/ICE.png" alt="logo_ice" className="h-[20px] object-contain my-8"/>
          <span className="text-main2-1 text-3xl ml-1 font-semibold"> LeaderBoards</span>
        </div>
        <div className="text-main1-3 mt-[1px] ml-[50px]"> 
          Mô tả 1 cái gì đó
        </div>
      </div>

      <div className="flex flex-row flex-wrap items-start"> 
        <div className="flex flex-col">
          <AddTable 
            columns={['Name', 'Reputation', 'Signal', 'Impact']} 
            data={data} 
            nameTable="Xếp hạng người dùng" 
            description="Mô tả về xếp hạng người dùng"
          />
        </div>
        
        <div className="flex flex-col">
          <AddTable 
            columns={['Type Error', 'Quantity']} 
            data={[{'Type Error': 'type1', Quantity: 100}]} 
            nameTable="Chủng lỗi" 
            description="Mô tả về các loại lỗi"
          />
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;