// Hacktivity.tsx
import React, { useState } from 'react';
import HacktivityItem from '../../components/HacktivityItem';
import DiscoveryTable from '../../components/DiscoveryTable';

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
        title: 'Cross-Site Scripting (XSS)',
        date: '2024-10-15',
        status: 'Resolved',
        reporter: 'Bob',
        shortInfo: 'A Cross-Site Scripting (XSS) vulnerability...',
        bounty: '$750'
    },
];

const cveDiscoveryData = [
    {
        h1Rank: '1',
        cveId: 'CVE-2024-1234',
        numReports: 3,
        vendor: 'Vendor A',
        product: 'Product X',
        description: 'A critical SQL injection vulnerability',
        epss: '0.8'
    },
    {
        h1Rank: '2',
        cveId: 'CVE-2024-5678',
        numReports: 2,
        vendor: 'Vendor B',
        product: 'Product Y',
        description: 'An XSS vulnerability found in Product Y',
        epss: '0.6'
    },
];

const cweDiscoveryData = [
    {
        cweId: 'CWE-89',
        weaknessName: 'SQL Injection',
        numReports: 10,
        severity: 'High',
        mitigation: 'Use parameterized queries to prevent SQL injection.'
    },
    {
        cweId: 'CWE-79',
        weaknessName: 'Cross-Site Scripting (XSS)',
        numReports: 8,
        severity: 'Medium',
        mitigation: 'Escape untrusted data in HTML context.'
    },
];

const Hacktivity: React.FC = () => {
    const [activeView, setActiveView] = useState<'overview' | 'cve' | 'cwe'>('overview');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOverviewData = overviewData.filter(item =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.reporter.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredCVEDiscoveryData = cveDiscoveryData.filter(item =>
        item.cveId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.vendor.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const filteredCWEDiscoveryData = cweDiscoveryData.filter(item =>
        item.cweId.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.weaknessName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-gray-900 min-h-screen w-full text-white">
            <div className="bg-gray-800 w-full h-[70px] flex items-center justify-center">
                <h1 className="text-green-500 text-3xl font-bold">Hacktivity</h1>
            </div>

            <div className="container mx-auto p-4">
                <div className="bg-gray-800 p-4 rounded mt-4">
                    <p className="mb-4">Browse the latest reports and their status:</p>

                    <div className="flex mb-4">
                        <button
                            onClick={() => setActiveView('overview')}
                            className={`w-1/3 py-1 text-center ${activeView === 'overview' ? 'bg-gray-700' : 'bg-gray-800'} rounded-l`}
                        >
                            Overview
                        </button>
                        <button
                            onClick={() => setActiveView('cve')}
                            className={`w-1/3 py-1 text-center ${activeView === 'cve' ? 'bg-gray-700' : 'bg-gray-800'}`}
                        >
                            CVE Discovery
                        </button>
                        <button
                            onClick={() => setActiveView('cwe')}
                            className={`w-1/3 py-1 text-center ${activeView === 'cwe' ? 'bg-gray-700' : 'bg-gray-800'} rounded-r`}
                        >
                            CWE Discovery
                        </button>
                    </div>

                    <div className="mb-4">
                        <input
                            type="text"
                            placeholder="Search reports..."
                            value={searchTerm}
                            onChange={e => setSearchTerm(e.target.value)}
                            className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600"
                        />
                    </div>

                    {activeView === 'overview' && (
                        <div>
                            {filteredOverviewData.map((item, index) => (
                                <HacktivityItem key={index} {...item} />
                            ))}
                        </div>
                    )}

                    {activeView === 'cve' && (
                        <DiscoveryTable
                            headers={['H1 Rank', 'CVE ID', 'Number of Reports', 'Vendor', 'Product', 'Description', 'EPSS']}
                            rows={filteredCVEDiscoveryData}
                            rowKeys={['h1Rank', 'cveId', 'numReports', 'vendor', 'product', 'description', 'epss']}
                        />
                    )}

                    {activeView === 'cwe' && (
                        <DiscoveryTable
                            headers={['CWE ID', 'Weakness Name', 'Number of Reports', 'Severity', 'Mitigation']}
                            rows={filteredCWEDiscoveryData}
                            rowKeys={['cweId', 'weaknessName', 'numReports', 'severity', 'mitigation']}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hacktivity;
