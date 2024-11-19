import { useState } from 'react';

interface Summary {
    totalRewards: string;
    totalPaid: string;
    adjustments: string;
    outstandingBalance: string;
    paymentFrequency: string;
}

const mySummary: Summary = {
    totalRewards: '$0',
    totalPaid: '$0',
    adjustments: '$0',
    outstandingBalance: '$0',
    paymentFrequency: 'Daily',
};

const SummarySection: React.FC = () => (
    <div className="bg-main1-2 text-white p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">My Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>Total Rewards Earned: {mySummary.totalRewards}</div>
            <div>Total Paid: {mySummary.totalPaid}</div>
            <div>Adjustments: {mySummary.adjustments}</div>
            <div>Outstanding Balance: {mySummary.outstandingBalance}</div>
            <div>Payment Frequency: {mySummary.paymentFrequency}</div>
        </div>
    </div>
);

const TableSection: React.FC<{ title: string; columns: string[]; rows: any[] }> = ({ title, columns, rows }) => (
    <div className="bg-main1-2 text-white p-4 rounded mb-4">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <div className="overflow-x-auto">
            <table className="min-w-full bg-main1-1 text-white border border-gray-200 rounded-lg">
                <thead>
                    <tr className="bg-main1-2">
                        {columns.map((column, index) => (
                            <th key={index} className="py-2 px-4 border-b">{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.length === 0 ? (
                        <tr className="text-center">
                            <td className="py-2 px-4 border-b" colSpan={columns.length}>Nothing to show yet.</td>
                        </tr>
                    ) : (
                        rows.map((row, rowIndex) => (
                            <tr key={rowIndex} className="text-center">
                                {columns.map((column, colIndex) => (
                                    <td key={colIndex} className="py-2 px-4 border-b">{row[column]}</td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    </div>
);

const VerificationLetterSection: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<string>('All time');
    const [customDate, setCustomDate] = useState<string>('');

    const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCustomDate(e.target.value);
    };

    const handleEmailRequest = () => {
        // Logic to handle the email request
        alert('Verification letter request queued. You will receive an email shortly.');
    };

    return (
        <div className="bg-main1-2 text-white p-4 rounded mb-4">
            <h2 className="text-xl font-semibold mb-2">Verification letter</h2>
            <p>To obtain a verification letter, you must have at least one payment and a valid tax form on file.</p>
            <div className="mt-4">
                <label className="flex items-center mb-2">
                    <input
                        type="radio"
                        value="All time"
                        checked={selectedOption === 'All time'}
                        onChange={handleOptionChange}
                        className="mr-2"
                    />
                    All time
                </label>
                <label className="flex items-center mb-2">
                    <input
                        type="radio"
                        value="Custom date range"
                        checked={selectedOption === 'Custom date range'}
                        onChange={handleOptionChange}
                        className="mr-2"
                    />
                    Custom date range
                </label>
                {selectedOption === 'Custom date range' && (
                    <div className="mt-2">
                        <input
                            type="date"
                            value={customDate}
                            onChange={handleDateChange}
                            className="w-full p-2 rounded bg-main1-1 text-white border border-gray-300"
                        />
                    </div>
                )}
            </div>
            <button
                onClick={handleEmailRequest}
                className="mt-4 p-2 bg-blue-600 text-white rounded"
            >
                Email letter
            </button>
            <p className="mt-2 text-sm">Your request will be queued and you will receive an email shortly.</p>
        </div>
    );
};

const RewardTable: React.FC = () => {
    const earningsColumns = ['Source', 'Awarded by', 'Awarded at', 'Amount'];
    const payoutsColumns = ['Amount', 'Paid out at', 'Reference', 'Payout provider', 'Status'];
    const adjustmentsColumns = ['Category', 'Note', 'Adjusted at', 'Amount'];

    const earningsRows: any[] = [];
    const payoutsRows: any[] = [];
    const adjustmentsRows: any[] = [];

    return (
        <div>
            <SummarySection />
            <TableSection title="Earnings" columns={earningsColumns} rows={earningsRows} />
            <TableSection title="Payouts" columns={payoutsColumns} rows={payoutsRows} />
            <TableSection title="Adjustments" columns={adjustmentsColumns} rows={adjustmentsRows} />
            <VerificationLetterSection />
        </div>
    );
};

export default RewardTable;
