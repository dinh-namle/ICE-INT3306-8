import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PartnerCreateList, PartnerSearch } from '../../components';
import { CgSortAz } from 'react-icons/cg';
import { MdDownloadDone, MdOutlineCancel } from 'react-icons/md';
import { IoMdSend } from 'react-icons/io';

const PartnerReports: React.FC = () => {
    const navigate = useNavigate();
    const [searchTerm1, setSearchTerm1] = useState<string>('');
    const [searchTerm2, setSearchTerm2] = useState<string>('');

    const handleSend = () => {};
    const handleDone = () => {};
    const handleCancel = () => {};

    const data = [
        ['abc', 'XSS', 'Program1', 'uet.vnu.edu.vn', '11/11/11'],
        ['def', 'XSS', 'Program2', 'uet.vnu.edu.vn', '12/12/12'],
    ];

    const buttons = [
        { handleAction: handleSend, icon: <IoMdSend className="fill-white size-6" /> },
        { handleAction: handleDone, icon: <MdDownloadDone className="fill-white size-6" /> },
        { handleAction: handleCancel, icon: <MdOutlineCancel className="fill-white size-6" /> },
    ];

    const handleSearchChange1 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm1(e.target.value);
    };

    const handleKeyPress1 = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('Tìm kiếm ô 1:', searchTerm1);
        }
    };

    const handleSearchChange2 = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm2(e.target.value);
    };

    const handleKeyPress2 = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            console.log('Tìm kiếm ô 2:', searchTerm2);
        }
    };

    const handleSort = () => {};

    return (
        <div className="bg-main1-2 min-h-screen w-full h-[100vh] flex flex-col p-[20px] ">
            <div className="w-full basis-[10%] flex justify-center items-center">
                <PartnerSearch 
                    searchTerm={searchTerm1} 
                    onSearchChange={handleSearchChange1} 
                    onSearchKeyPress={handleKeyPress1}
                />
            </div>

            <div className="basis-[10%] flex flex-row justify-center items-center w-full pb-[10px]">
                <div className="basis-[50%] pl-[10px] flex flex-row justify-start items-center">
                    <div className="basis-[90%] mr-[10px]">
                        <input 
                            type="text" 
                            value={searchTerm2} 
                            onChange={handleSearchChange2} 
                            onKeyPress={handleKeyPress2}
                            placeholder="Tìm kiếm ..." 
                            className="border-b-[0.25px] border-gray-300 p-2 w-full bg-main1-2 mb-2"
                        />
                    </div>

                    <div className="basis-[10%] flex justify-center items-center border-[0.25px] border-main1-3 rounded-md">
                        <button onClick={handleSort}>
                            <CgSortAz className="size-10 text-main1-3"/>
                        </button>
                    </div>
                </div>
                <div className="basis-[50%] mr-[10px] flex justify-end items-center">
                    
                </div>
            </div>

            <div className="basis-[80%] w-full bg-main1-1 p-[20px]">
                <PartnerCreateList 
                    showCheckbox={false}
                    headers={["Researcher", "Loại", "Programs", "Mục tiêu", "Thời gian"]}
                    data={data}
                    buttons={buttons}
                />
            </div>
        </div>
    );
}

export default PartnerReports;