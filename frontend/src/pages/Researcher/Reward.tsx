import RewardTable from '../../components/RewardTable.tsx';

const Reward: React.FC = () => {
    return (
        <div className="bg-main1-2 min-h-screen w-full">
            <div className="container mx-auto p-4">
                <div className="w-full h-[70px] bg-main1-1 flex items-center justify-center mx-auto border-l-[0.1px] border-main1-3" style={{ marginLeft: '-0.1px' }}>
                    <h1 className="text-main2-1 text-3xl font-bold">Reward</h1>
                </div>
                <div className="bg-main1-1 text-white p-4 rounded">
                    <p className="mb-4">Our rewards program incentivizes responsible disclosure of vulnerabilities. Below is your summary and detailed information about earnings, payouts, and adjustments:</p>
                    <RewardTable />
                </div>
            </div>
        </div>
    );
};

export default Reward;