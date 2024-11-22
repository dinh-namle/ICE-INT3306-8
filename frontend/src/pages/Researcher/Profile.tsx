import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HacktivityItem from '../../components/HacktivityItem';
import { Modal } from '../../components';
import ChangePasswordModal from './ChangePasswordModal';

const overviewData = [
    {
        title: 'SQL Injection Vulnerability',
        date: '2024-11-01',
        status: 'Resolved',
        reporter: 'Alice',
        shortInfo: 'An SQL injection vulnerability...',
        bounty: '$500'
    },
    {
        title: 'SQL Injection Vulnerability',
        date: '2024-11-01',
        status: 'Resolved',
        reporter: 'Alice',
        shortInfo: 'An SQL injection vulnerability...',
        bounty: '$500'
    },
    {
        title: 'SQL Injection Vulnerability',
        date: '2024-11-01',
        status: 'Resolved',
        reporter: 'Alice',
        shortInfo: 'An SQL injection vulnerability...',
        bounty: '$500'
    },
];

const Profile = () => {
    const navigate = useNavigate();
    const handleNavigate = (path: string) => {
        navigate(path);
    };

    const [openModal, setOpenModal] = useState(false)
    const handleOpenModal = () => { setOpenModal(!openModal) }  

    const [searchTerm, setSearchTerm] = useState('');

    const filteredOverviewData = overviewData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.reporter.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const [isEditing, setIsEditing] = useState(false);
    const [userName, setUserName] = useState('CaoLePhungCP');
    const [email, setEmail] = useState('caolephungcp@gmail.com');
    const [phoneNumber, setPhoneNumber] = useState('0123 456 789');
    const [webSite, setWebSite] = useState('abcdd');
    const [about, setAbout] = useState(`Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel reprehenderit nihil quis ullam quam, voluptatum ea cum nemo dolore qui esse ex ut non, odit soluta rem tenetur repudiandae nesciunt.`);
    const [lastUpdated, setLastUpdated] = useState(new Date().toLocaleString());

    const handleEditToggle = () => {
        if (isEditing) {
            setLastUpdated(new Date().toLocaleString());
        }
        setIsEditing(!isEditing);
    };

    const renderInput = (
        id: string,
        value: string,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        placeholder: string,
        type: string = "text"
    ) => (
        <div className="flex flex-col w-full items-center mt-2 pl-[10px] pr-[10px]">
            <label htmlFor={id} className="text-main1-3"></label>
            <input
                id={id}
                type={type}
                value={value}
                readOnly={!isEditing}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full p-2 rounded ${isEditing ? 'border border-gray-400' : 'bg-transparent'} text-main1-3`}
                style={{ backgroundColor: isEditing ? 'var(--main1-3)' : 'transparent' }}
            />
        </div>
    );

    interface StatsProps {
        label1: string;
        value1: string | number;
        label2: string;
        value2: string | number;
    }
    
    const Stats: React.FC<StatsProps> = ({ label1, value1, label2, value2 }) => {
        return (
            <div className="flex flex-row w-full justify-center items-center">
                <div className="mr-4 w-full flex justify-center"><span className="text-main1-3">{label1}: {value1}</span></div>
                <div className="w-full flex justify-center"><span className="text-main1-3">{label2}: {value2}</span></div>
            </div>
        );
    };

    return (
        <div className="bg-main1-2 min-h-screen w-full flex flex-col items-center overflow-y-auto">
            <div className="w-full h-[70px] bg-main1-1 flex items-center justify-start mx-auto border-l-[0.1px] border-main1-3">
                <h1 className="text-main2-1 pl-[50px] text-3xl font-bold">User Profile</h1>
            </div>

            <div className="mt-[10px] flex flex-row justify-center w-full">
                <div className="h-[650px] w-[370px] mr-[30px] ml-[20px] flex flex-col items-center basis-1/3">
                    <div className="bg-main1-1 w-full flex flex-col items-center p-[1px] pb-[30px] mb-[30px]">
                        <div className="pb-[10px] pt-[30px]">
                            <img src="public/Logo_UET.png" alt="Logo" className="w-[180px]" />
                        </div>
                        <div className="flex flex-col w-full items-center pt-[10px] pb-[10px] border-b-[0.25px] border-main1-3">
                            {isEditing ? (
                                <>
                                    {renderInput("userName", userName, (e) => setUserName(e.target.value), "Enter your username")}
                                    {renderInput("email", email, (e) => setEmail(e.target.value), "Enter your email", "email")}
                                    {renderInput("phoneNumber", phoneNumber, (e) => setPhoneNumber(e.target.value), "Enter your phone number")}
                                    {renderInput("webSite", webSite, (e) => setWebSite(e.target.value), "Enter your website")}
                                </>
                            ) : (
                                <div className="flex flex-col w-full items-center">
                                    <span className="text-main1-3">{userName}</span>
                                    <span className="text-main1-3">{email}</span>
                                    <span className="text-main1-3">{phoneNumber}</span>
                                    <span className="text-main1-3">{webSite}</span>
                                </div>
                            )}
                        </div>

                        <div className="p-[10px] w-full flex justify-center">
                            <span className="text-main1-3">{lastUpdated}</span>
                        </div>

                        <div className="flex flex-row w-full justify-center">
                            <button 
                                className="text-main2-1 w-[180px] h-[60px] bg-slate-800 m-[10px] text-center rounded-md" 
                                onClick={handleEditToggle}
                            >
                                {isEditing ? 'Lưu thay đổi' : 'Thông tin cá nhân'}
                            </button>
                            <button onClick={() => {handleOpenModal()}} className="text-main2-1 w-[180px] h-[60px] bg-slate-800 m-[10px] text-center rounded-md">
                                Mật khẩu
                            </button>
                            {openModal && <Modal onClose={() => {handleOpenModal()}}>
                                <ChangePasswordModal onClose={() => {handleOpenModal()}} />
                            </Modal>}
                        </div>
                    </div>

                    <div className="bg-main1-1 flex flex-col w-full mb-[30px]">
                        <div className="w-full bg-slate-900 h-[50px] flex items-center pl-[20px]">
                            <span className="text-main1-3">Thống kê</span>
                        </div>
                        <div className="w-full p-[20px] flex flex-col justify-center">
                            <Stats label1="Reputation" value1={100} label2="Rank" value2={1} />
                            <Stats label1="Signal" value1={75} label2="Percentile" value2={95} />
                            <Stats label1="Impact" value1={50} label2="Percentile" value2={90} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center basis-2/3 mr-[20px]">
                    <div className="bg-main1-1 flex flex-col w-full mb-[30px]">
                        <div className="w-full bg-slate-900 h-[50px] flex items-center pl-[20px]">
                            <span className="text-main1-3">About {userName}</span>
                        </div>
                        <div className="w-full p-[20px] flex justify-center">
                            <label htmlFor="about" className="text-main1-3"></label>
                            {isEditing ? (
                                <textarea
                                    id="about"
                                    value={about}
                                    onChange={(e) => setAbout(e.target.value)}
                                    placeholder="Tell us about yourself..."
                                    className={`w-full p-2 mt-1 rounded border border-gray-400 text-main1-3`}
                                    style={{ backgroundColor: 'var(--main1-3)' }}
                                />
                            ) : (
                                <p className="text-main1-3">{about}</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-main1-1 flex flex-col w-full mb-[30px] h-[500px]">
                        <div className="w-full bg-slate-900 h-[50px] flex items-center pl-[20px]">
                            <span className="text-main1-3">Hacktivity</span>
                        </div>
                        <div className="w-full p-[20px] flex items-center overflow-hidden">
                            <div className="w-full overflow-y-auto" style={{ maxHeight: '400px', scrollbarWidth: 'none' }}>
                                {filteredOverviewData.map((item, index) => (
                                    <HacktivityItem key={index} {...item} />
                                ))}
                            </div>    
                        </div>
                    </div>

                    <div className="bg-main1-1 flex flex-col w-full mb-[30px]">
                        <div className="w-full bg-slate-900 h-[50px] flex items-center pl-[20px]">
                            <span className="text-main1-3">Thanks</span>
                        </div>
                        <div className="w-full p-[20px] flex justify-center">
                            {/*  */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;