import React from 'react';

interface HacktivityItemProps {
    title: string;
    date: string;
    status: string;
    bounty: string;
    reporter: string;
    shortInfo: string;
}

const HacktivityItem: React.FC<HacktivityItemProps> = ({ title, date, status, bounty, reporter, shortInfo }) => {
    return (
        <div className="bg-main1-2 text-white p-4 rounded mb-4 flex flex-col">
            <div className="flex justify-between items-center mb-2">
                <div>
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <p className="text-sm text-main1-3">{date}</p>
                    <p className="text-sm">Reporter: {reporter}</p>
                </div>
                <div className="text-right">
                    <p className={`text-sm font-semibold ${status === 'Resolved' ? 'text-main2-1' : 'text-sub-1'}`}>{status}</p>
                    <p className="text-sm">Bounty: {bounty}</p>
                </div>
            </div>
            <textarea
                readOnly
                value={shortInfo}
                className="bg-main1-1 text-white p-2 rounded resize-none"
                rows={2}
            />
        </div>
    );
};

export default HacktivityItem;
