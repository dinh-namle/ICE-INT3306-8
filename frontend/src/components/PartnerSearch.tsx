import React from 'react';
import { FaRegBell, FaRegHandPeace } from 'react-icons/fa6';

interface PartnerSearchProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PartnerSearch: React.FC<PartnerSearchProps> = ({ searchTerm, onSearchChange, onSearchKeyPress }) => {
    return (
        <div className="flex flex-row w-full items-center justify-center">
            <div className="basis-[65%] w-full">
                <div className="flex flex-row">
                    <span className="text-main2-1 text-2xl mr-[10px]">Hello Imposter </span>
                    <span className="text-main2-1 text-2xl"><FaRegHandPeace /></span>
                </div>
                <div><span className="text-main1-3">Hãy để chúng tôi bảo vệ bạn</span></div>
            </div>

            <div className="basis-[30%]">
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={onSearchChange} 
                    onKeyPress={onSearchKeyPress}
                    placeholder="Tìm kiếm ..." 
                    className="border border-gray-300 rounded-full p-2 w-full"
                />
            </div>

            <div className="basis-[5%] flex justify-center items-center">
                <div className="bg-white rounded-lg p-[8px]"><FaRegBell className="fill-black size-7" /></div>
            </div>
        </div>
    );
};

export default PartnerSearch;