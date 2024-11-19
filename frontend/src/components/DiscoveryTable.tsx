import React from 'react';

interface DiscoveryTableProps {
    headers: string[];
    rows: Array<Record<string, string | number>>;
    rowKeys: string[];
}

const DiscoveryTable: React.FC<DiscoveryTableProps> = ({ headers, rows, rowKeys }) => {
    return (
        <div className="overflow-x-auto bg-gray-800 rounded p-4">
            <table className="min-w-full text-white">
                <thead>
                    <tr className="text-left text-gray-400">
                        {headers.map((header, index) => (
                            <th 
                                key={index} 
                                className={`p-2 ${header === 'Number of Reports' ? 'text-center' : ''}`}
                            >
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index} className="border-b border-gray-600">
                            {rowKeys.map((key, idx) => (
                                <td 
                                    key={idx} 
                                    className={`p-2 ${key === 'numReports' ? 'text-center' : ''}`}
                                >
                                    {row[key]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DiscoveryTable;
