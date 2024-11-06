import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface CreateChatProps {
    avt: string;
    reportName: string;
    userName: string;
    time: string;
}

const CreateChat: React.FC<CreateChatProps> = ({ avt, reportName, userName, time }) => {
    return (
        <div className="mt-[10px] bg-main1-2 w-full flex flex-row h-[60px] rounded-xl">
            <div className="basis-[15%] w-full flex justify-center items-center">
                <div id="userAvt" className="rounded-full w-[50%] h-[50%] flex justify-center items-center">
                    <img src={avt} alt="" className="w-full"/>
                </div>
            </div>
            <div id="userName" className="basis-[45%] w-full h-[60px] flex items-center">
                <div>
                    <div><span className="text-white"><b>{reportName}</b></span></div>
                    <div><span className="text-main1-3">{userName}</span></div>
                </div>
            </div>
            <div className="basis-[30%] w-full flex items-center">
                <div>
                    <div><span className="text-main1-3">Thời gian</span></div>
                    <div><span className="text-main1-3">{time}</span></div>
                </div>
            </div>
            <div className="basis-[10%] w-full flex items-center">
                <button className="text-main2-1">B</button>
            </div>
        </div>
    );
};

const PartnerInbox: React.FC = () => {
    const navigate = useNavigate();

    const [searchTerm1, setSearchTerm1] = useState<string>('');
    const [searchTerm2, setSearchTerm2] = useState<string>('');

    const handleSearchChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm1(e.target.value);
    };

    const handleSearchChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm2(e.target.value);
    };

    const handleKeyPress1 = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('Tìm kiếm ô 1:', searchTerm1);
        }
    };

    const handleKeyPress2 = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('Tìm kiếm ô 2:', searchTerm2);
        }
    };

    const handleAddChat = () => {
        console.log('Thêm chat:', searchTerm2);
        
    };

    return (
        <div className="bg-main1-2 min-h-screen w-full flex flex-col items-center overflow-y-auto pl-[30px] pr-[30px] pt-[60px] pb-[60px]">
            <div className="flex flex-row w-full mb-[40px]">
                <div className="basis-3/6">
                    <div><span className="text-main2-1 text-2xl">Hello Imposter</span></div>
                    <div><span className="text-main1-3">Hãy để chúng tôi bảo vệ bạn</span></div>
                </div>
                <div className="basis-2/6">
                    <input 
                        type="text" 
                        value={searchTerm1} 
                        onChange={handleSearchChange1} 
                        onKeyPress={handleKeyPress1}
                        placeholder="Tìm kiếm ..." 
                        className="border border-gray-300 rounded-full p-2 w-full"
                    />
                </div>
                <div className="basis-1/6"></div>
            </div>

            <div className="flex flex-row w-full h-[90vh]">
                <div className="flex flex-col basis-1/3 bg-main1-1 h-[100%] mr-[30px] p-[20px] rounded-2xl">
                    <div className=" flex items-center w-full basis-[10%]"><span className="text-main1-3 text-2xl pl-[20px]">Đoạn chat</span></div>
                    
                    <div className="flex flex-row w-full items-center mb-[20px] basis-[10%]">
                        <div className="basis-2/3 mr-[10px]">
                            <input 
                                type="text" 
                                value={searchTerm2} 
                                onChange={handleSearchChange2} 
                                onKeyPress={handleKeyPress2}
                                placeholder="Tìm kiếm ..." 
                                className="border border-gray-300 rounded-xl p-2 w-full bg-main1-1"
                            />
                        </div>
                        <div className="basis-1/3">
                            <span className="text-main2-1 text-xl">Chat</span>
                            <button onClick={handleAddChat} className="text-main2-1 text-2xl ml-[20px]">+</button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-start items-start w-full overflow-auto basis-[80%]"
                    style={{
                        maxHeight: 'auto',
                        overflowY: 'auto', 
                        scrollbarWidth: 'thin', 
                        scrollbarColor: '#4a5568 transparent', 
                      }}
                    >
                        <CreateChat avt="/Logo_UET.png" reportName="RP1" userName="user1" time="10:10:10" />
                        <CreateChat avt="/Logo_UET.png" reportName="RP1" userName="user1" time="10:10:10" />
                        <CreateChat avt="/Logo_UET.png" reportName="RP1" userName="user1" time="10:10:10" />
                    </div>
                </div>
                <div className="flex flex-col basis-2/3 bg-main1-1">
                    abc
                </div>
            </div>
        </div>
    );
}

export default PartnerInbox;