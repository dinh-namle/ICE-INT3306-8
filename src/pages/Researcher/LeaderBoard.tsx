import { useNavigate } from 'react-router-dom';
import { MdLeaderboard } from "react-icons/md";
import AddTable from '../../components/AddTable';

const LeaderBoard = () => {
  const navigate = useNavigate();

  const data = [
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 },
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 },
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 },
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 },
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 },
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 },
    { Name: 'Player 1', Reputation: 100, Signal: 120, Impact: 130 },
    { Name: 'Player 2', Reputation: 100, Signal: 115, Impact: 125 }

  ];

  return (
    <div className="bg-main1-2 min-h-screen w-full">
      <div className="w-full h-[70px] bg-main1-1 flex items-center justify-start mx-auto border-l-[0.1px] border-main1-3">
        <h1 className="text-main2-1 pl-[50px] text-3xl font-bold">LeaderBoards</h1>
      </div>

      <div className="mt-[15px] ml-[10px] mr-[10px] w-full flex flex-col items-start justify-center"> 
        <div className="flex items-center pl-[60px] h-[35px]"> 
          <MdLeaderboard className="text-white text-3xl mr-2" /> 
          <img src="/ICE.png" alt="logo_ice" className="h-[20px] object-contain my-8"/>
          <span className="text-main2-1 text-3xl ml-1 font-semibold"> LeaderBoards</span>
        </div>
        <div className="text-main1-3 mt-[1px] ml-[50px]"> 
          <span>Tất cả bảng xếp hạng đều dựa trên khoảng thời gian đã chọn.</span>
        </div>
      </div>

      <div className="flex flex-row w-full p-[20px]"> 
        <div className="basis-2/3 mr-[20px]">
          <AddTable 
            columns={['Name', 'Reputation', 'Signal', 'Impact']} 
            data={data} 
            nameTable="Xếp hạng người dùng" 
            description="Xếp hạng được tính dựa trên danh tiếng đạt được."
          />
        </div>
        
        <div className="basis-1/3 mr-[30px]">
          <AddTable 
            columns={['Type Error', 'Quantity']} 
            data={[{'Type Error': 'type1', Quantity: 100}]} 
            nameTable="Chủng lỗi" 
            description="Các loại lỗi phổ biến nhất."
          />
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;