import React from 'react';

interface PartnerSearchProps {
    searchTerm: string;
    onSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSearchKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const PartnerSearch: React.FC<PartnerSearchProps> = ({ searchTerm, onSearchChange, onSearchKeyPress }) => {
    return (
        <div className="basis-[10%] flex flex-row items-center justify-center w-full mb-[40px]">
            <div className="basis-3/6">
                <div><span className="text-main2-1 text-2xl">Hello Imposter</span></div>
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
            <div className="basis-1/6 flex justify-center items-center">Chuông</div>
        </div>
    );
};

export default PartnerSearch;