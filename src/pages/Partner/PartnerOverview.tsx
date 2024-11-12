import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PartnerSearch } from '../../components';

const PartnerOverview: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm1, setSearchTerm1] = useState<string>('');
    const userName = "Imposter";

    const handleSearchChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm1(e.target.value);
    };

    const handleKeyPress1 = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('Tìm kiếm ô 1:', searchTerm1);
        }
    };

    return (
        <div className="bg-main1-2 min-h-screen w-full flex flex-row items-stretch overflow-y-auto pl-[30px] pr-[30px] pt-[30px] pb-[60px]">
            <div className="basis-2/3 flex flex-col min-h-screen mr-[20px]">
                <div className="basis-[10%] flex justify-center items-center w-full pb-[10px]">
                    <PartnerSearch 
                        searchTerm={searchTerm1} 
                        onSearchChange={handleSearchChange1} 
                        onSearchKeyPress={handleKeyPress1} 
                    />
                </div>

                <div className="basis-[20%] flex flex-row w-full">
                    <div className="basis-1/3 bg-slate-300 mr-[10px] rounded-lg">Card1</div>
                    <div className="basis-1/3 bg-slate-300 mr-[10px] rounded-lg">Card1</div>
                    <div className="basis-1/3 bg-slate-300 mr-[10px] rounded-lg">Card1</div>
                </div>

                <div className="basis-[35%] flex flex-row w-full">
                    <div className="basis-[60%] flex flex-col h-full mr-[15px] overflow-hidden">
                        <div className="basis-[10%] m-[10px]"><span className="text-xl text-main1-3">Report</span></div>
                        <div className="basis-[90%] bg-main1-1 border-[0.25px] border-main1-3 rounded-lg flex h-full">card</div>
                    </div>
                    <div className="basis-[40%] flex flex-col h-full">
                        <div className="basis-[10%] m-[10px]"><span className="text-xl text-main1-3">Response efficiency</span></div>
                        <div className="basis-[90%] bg-main1-1 border-[0.25px] border-main1-3 rounded-lg flex h-full">cảed</div>
                    </div>
                </div>

                <div className="basis-[35%] flex flex-row w-full">
                    <div className="basis-[60%] flex flex-col h-full mr-[15px] overflow-hidden">
                        <div className="basis-[10%] m-[10px]"><span className="text-xl text-main1-3">Paid</span></div>
                        <div className="basis-[90%] bg-main1-1 border-[0.25px] border-main1-3 rounded-lg flex h-full">card</div>
                    </div>
                    <div className="basis-[40%] flex flex-col h-full">
                        <div className="basis-[10%] m-[10px]"><span className="text-xl text-main1-3">Vulnerability</span></div>
                        <div className="basis-[90%] bg-main1-1 border-[0.25px] border-main1-3 rounded-lg flex h-full">cảed</div>
                    </div>
                </div>

                
            </div>
            <div className="basis-1/3 min-h-screen flex flex-col border-l-[0.25px] border-main1-3 p-[10px]">
                <div className="basis-[10%]">
                    <span className="text-white text-xl">Profile</span>
                </div>
                <div className="basis-[20%] w-full flex flex-col items-center border-b-[0.25px] border-main1-3">
                    <img src="/Logo_UET.png" alt="" className="w-[30%] h-auto" />
                    <span className="text-[18px] text-white mt-[5px] mb-[5px]">{userName}</span>
                    <span className="text-[18px] text-main1-3 mt-[5px] mb-[5px]">Các Imposter là nô lệ của GPA</span>
                </div>
                <div className="basis-[70%] p-[5px] pt-[10px]">
                    <span className="text-xl text-white"><b>To Do List</b></span>
                </div>
            </div>
        </div>
    )
}

export default PartnerOverview;