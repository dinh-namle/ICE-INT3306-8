import React from 'react';
import { FaRegBell, FaRegHandPeace } from 'react-icons/fa6';

interface PartnerSearchProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PartnerSearch: React.FC<PartnerSearchProps> = ({ searchTerm, onSearchChange, onSearchKeyPress }) => {
    return (
        <div className="flex flex-row items-center justify-center w-full">
            <div className="basis-3/6">
                <div className="flex flex-row">
                    <span className="text-main2-1 text-2xl mr-[10px]">Hello Imposter </span>
                    <span className="text-main2-1 text-2xl"><FaRegHandPeace /></span>
                </div>
                <div><span className="text-main1-3">Hãy để chúng tôi bảo vệ bạn</span></div>
            </div>
            <div className="basis-2/6">
                <input 
                    type="text" 
                    value={searchTerm} 
                    onChange={onSearchChange} 
                    onKeyPress={onSearchKeyPress}
                    placeholder="Tìm kiếm ..." 
                    className="border border-gray-300 rounded-full p-2 w-full"
                />
            </div>
            <div className="basis-1/6 flex justify-start items-center pl-[30px]">
                <div className="bg-white rounded-lg p-[8px]"><FaRegBell className="fill-black size-7" /></div>
            </div>
        </div>
    );
};

export default PartnerSearch;