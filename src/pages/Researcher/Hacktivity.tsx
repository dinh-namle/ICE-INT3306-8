import React, { useState } from 'react';
import HacktivityItem from '../../components/HacktivityItem.tsx';

const Hacktivity: React.FC = () => {
    const [activeTab, setActiveTab] = useState<'disclosed' | 'undisclosed'>('disclosed');
    const [searchTerm, setSearchTerm] = useState('');

    const disclosedData = [
        {
            title: 'SQL Injection Vulnerability',
            date: '2024-11-01',
            status: 'Resolved',
            bounty: '$500',
            reporter: 'Alice',
            shortInfo: 'An SQL injection vulnerability was discovered that could allow attackers to execute arbitrary SQL code.'
        },
        {
            title: 'Cross-Site Scripting (XSS)',
            date: '2024-10-15',
            status: 'Resolved',
            bounty: '$750',
            reporter: 'Bob',
            shortInfo: 'A Cross-Site Scripting (XSS) vulnerability was found, enabling attackers to inject malicious scripts.'
        },
    ];

    const undisclosedData = [
        {
            title: 'Remote Code Execution',
            date: '2024-09-30',
            status: 'Pending',
            bounty: '$1,000',
            reporter: 'Charlie',
            shortInfo: 'A Remote Code Execution (RCE) vulnerability that could allow attackers to run arbitrary code on the server.'
        },
    ];

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const filteredData = (data: typeof disclosedData) => {
        return data.filter(item =>
            item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.reporter.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.shortInfo.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    return (
        <div className="bg-main1-2 min-h-screen w-full">
            <div className="bg-main1-1 w-full h-[70px] flex items-center justify-center">
                <h1 className="text-main2-1 text-3xl font-bold">Hacktivity</h1>
            </div>
            <div className="container mx-auto p-4">
                <div className="bg-main1-1 text-white p-4 rounded mt-4">
                    <p className="mb-4">Browse the latest reports and their status:</p>

                    <div className="flex mb-4">
                        <button
                            onClick={() => setActiveTab('disclosed')}
                            className={`w-1/2 py-1 text-center ${activeTab === 'disclosed' ? 'bg-main1-2' : 'bg-main1-1'} rounded-l`}
                        >
                            Disclosed
                        </button>
                        <button
                            onClick={() => setActiveTab('undisclosed')}
                            className={`w-1/2 py-1 text-center ${activeTab === 'undisclosed' ? 'bg-main1-2' : 'bg-main1-1'} rounded-r`}
                        >
                            Undisclosed
                        </button>
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search reports..."
                            value={searchTerm}
                            onChange={handleSearchChange}
                            className="w-full p-2 rounded bg-main1-2 text-white border border-main1-3"
                        />
                    </div>

                    {activeTab === 'disclosed' && (
                        <div>
                            {filteredData(disclosedData).map((item, index) => (
                                <HacktivityItem
                                    key={index}
                                    title={item.title}
                                    date={item.date}
                                    status={item.status}
                                    bounty={item.bounty}
                                    reporter={item.reporter}
                                    shortInfo={item.shortInfo}
                                />
                            ))}
                        </div>
                    )}

                    {activeTab === 'undisclosed' && (
                        <div>
                            {filteredData(undisclosedData).map((item, index) => (
                                <HacktivityItem
                                    key={index}
                                    title={item.title}
                                    date={item.date}
                                    status={item.status}
                                    bounty={item.bounty}
                                    reporter={item.reporter}
                                    shortInfo={item.shortInfo}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hacktivity;
