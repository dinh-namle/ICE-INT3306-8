import React from 'react';

interface OverviewItemProps {
    title: string;
    date: string;
    status: string;
    reporter: string;
    shortInfo: string;
    bounty: string;
}

const HacktivityItem: React.FC<OverviewItemProps> = ({ title, date, status, reporter, shortInfo, bounty }) => {
    return (
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md mb-4 flex flex-col space-y-3">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-xs text-gray-400">{date}</p>
                </div>
                <div className="text-right">
                    <span className={`text-sm font-semibold ${status === 'Resolved' ? 'text-green-500' : 'text-yellow-500'}`}>
                        {status}
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center text-sm">
                <p className="text-gray-300">Reporter: <span className="font-medium text-white">{reporter}</span></p>
                <p>Bounty: <span className="font-medium text-green-400">{bounty}</span></p>
            </div>

            <div className="bg-gray-700 text-gray-200 p-3 rounded">
                <textarea
                    readOnly
                    value={shortInfo}
                    className="w-full bg-transparent text-sm resize-none outline-none"
                    rows={2}
                />
            </div>
        </div>
    );
};

export default HacktivityItem;
