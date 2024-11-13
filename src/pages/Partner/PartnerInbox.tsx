import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PartnerSearch } from '../../components';
import { BsFillSendFill } from 'react-icons/bs';
import { FaLink, FaPlay } from 'react-icons/fa6';

interface CreateChatProps {
    avt: string;
    reportName: string;
    userName: string;
    time: string;
    onOpenChat: (userName: string) => void;
}

const CreateChat: React.FC<CreateChatProps> = ({ avt, reportName, userName, time, onOpenChat }) => {
    return (
        <button onClick={() => onOpenChat(userName)}>
            <div className="mt-[10px] bg-main1-2 w-full flex flex-row h-[60px] rounded-xl">
                <div className="basis-[15%] w-full flex justify-center items-center">
                    <div id="userAvt" className="rounded-full w-[50%] h-[50%] flex justify-center items-center">
                        <img src={avt} alt="" className="w-full" />
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
                    <div className="text-main2-1"> <FaPlay /> </div>
                </div>
            </div>
        </button>
    );
};

const PartnerInbox: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm1, setSearchTerm1] = useState<string>('');
    const [searchTerm2, setSearchTerm2] = useState<string>('');
    const [currentChat, setCurrentChat] = useState<string | null>(null);
    const [messages, setMessages] = useState<{ avt: string; content: string; time: string }[]>([]);

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

    const openChat = (userName: string) => {
        setCurrentChat(userName);
    };

    const createMessage = (avt: string, content: string) => {
        const newMessage = {
            content,
            avt,
            time: new Date().toLocaleTimeString(),
        };
        setMessages([...messages, newMessage]); 
    };

    const handleSendMessage = (content: string) => {
        if (currentChat) {
            createMessage("/Logo_UET.png", content); 
        }
    };

    return (
        <div className="bg-main1-2 min-h-screen w-full flex flex-col items-center overflow-y-auto pl-[30px] pr-[30px] pt-[60px] pb-[60px]">
            <div className="w-full pb-[40px]">
                <PartnerSearch 
                    searchTerm={searchTerm1} 
                    onSearchChange={handleSearchChange1} 
                    onSearchKeyPress={handleKeyPress1} 
                />
            </div>

            <div className="flex flex-row w-full h-[90vh]">
                <div className="flex flex-col basis-1/3 bg-main1-1 h-[100%] mr-[30px] p-[20px] rounded-2xl">
                    <div className="flex items-center w-full basis-[10%]"><span className="text-main1-3 text-2xl pl-[20px]">Đoạn chat</span></div>
                    
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
                        <CreateChat avt="/Logo_UET.png" reportName="RP1" userName="user1" time="10:10:10" onOpenChat={openChat} />
                        <CreateChat avt="/Logo_UET.png" reportName="RP2" userName="user2" time="10:10:10" onOpenChat={openChat} />
                    </div>
                </div>

                <div className="basis-2/3 bg-main1-1 rounded-2xl">
                    {currentChat ? (
                        <div className="flex flex-col h-full">
                            <div className="basis-[15%] flex flex-row bg-main1-2 border border-main2-1 rounded-t-xl">
                                <div className="basis-[15%] flex justify-center items-center mr-[10px] w-full">
                                    <img src="/Logo_UET.png" alt="" className="h-auto w-[50%] rounded-full"/>
                                </div>
                                <div className="basis-[75%] flex items-center w-full">
                                    <span className="text-white text-xl">{currentChat}</span>
                                </div>
                                <button onClick={handleAddChat} className="basis-[10%] flex items-center justify-center text-white w-full">
                                    <div className="rounded-lg w-[20%] h-[20%] bg-main2-1">!</div>
                                </button>
                            </div>

                            <div className="basis-[70%] flex flex-col items-end overflow-auto pr-[20px]"
                                style={{
                                    maxHeight: 'auto',
                                    overflowY: 'scroll', 
                                    scrollbarWidth: 'none', 
                                    msOverflowStyle: 'none' as React.CSSProperties['msOverflowStyle'],
                                }}
                            >
                                {messages.map((msg, index) => (
                                    <div key={index} className="flex items-center my-2 justify-end">
                                        <div className="bg-gray-200 rounded-lg p-2 max-w-[70%] break-words">{msg.content}</div>
                                        <img src={msg.avt} alt="" className="w-10 h-10 rounded-full ml-2" />
                                    </div>
                                ))}
                            </div>

                            <div className="basis-[15%] flex flex-row border-t-[0.25px] border-main1-2">
                                <div className="flex flex-row w-full items-center pl-[40px]">
                                    <input 
                                        type="text"
                                        placeholder="Aa"
                                        className="basis-[80%] border border-main2-1 rounded-xl p-2 w-full bg-main1-2 text-white"
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') {
                                                handleSendMessage(e.currentTarget.value);
                                                e.currentTarget.value = ''; 
                                            }   
                                        }}
                                    />
                                    <div className="basis-[10%] w-full flex justify-center items-center"><BsFillSendFill className="size-6 fill-main2-1"/></div>
                                    <div className="basis-[10%] w-full flex justify-start items-center"><FaLink className="size-6 fill-main2-1" /></div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-gray-400"></div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default PartnerInbox;