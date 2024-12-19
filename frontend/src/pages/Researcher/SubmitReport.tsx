import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Part1, Part2, Part3, Part4 } from '../../components/ReportForm.tsx';

interface FormData {
    asset: string;
    weakness: string;
    attack_vector: string;
    attack_complexity: string;
    privileges_required: string;
    user_interaction: string;
    scope: string;
    confidentiality_impact: string;
    integrity_impact: string;
    availability_impact: string;
    title: string;
    description: string;
    impact: string;
    files: File[];
}

const SubmitReport: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState<FormData>({
        asset: '',
        weakness: '',
        attack_vector: 'Network',
        attack_complexity: 'Low',
        privileges_required: 'None',
        user_interaction: 'None',
        scope: 'Unchanged',
        confidentiality_impact: 'None',
        integrity_impact: 'None',
        availability_impact: 'None',
        title: '',
        description: '',
        impact: '',
        files: [],
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const filesArray = Array.from(e.target.files);
            setFormData(prevData => ({
                ...prevData,
                files: filesArray,
            }));
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        navigate('/Programs');
    };

    const handleDraftSave = () => {
        console.log('Draft saved:', formData);
    };

    return (
        <div className="bg-main1-2 min-h-screen w-full">
            <div className="w-full h-[70px] bg-main1-1 flex items-center justify-start mx-auto border-l-[0.1px] border-main1-3">
                <h1 className="text-main2-1 pl-[50px] text-3xl font-bold">Report Submission</h1>
            </div>

            <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Form Section */}
                <div className="lg:col-span-2 bg-main1-1 p-6 rounded border border-main1-3 flex flex-col space-y-6">
                    <header className="text-center bg-main1-2 p-4 rounded">
                        <h1 className="text-3xl font-bold text-main2-1">Submit a Vulnerability Report</h1>
                    </header>
                    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-main1-2 p-4 rounded">
                        <Part1 asset={formData.asset} onChange={handleChange} />
                        <Part2 weakness={formData.weakness} onChange={handleChange} />
                        <Part3 formData={formData} onChange={handleChange} />
                        <Part4
                            title={formData.title}
                            description={formData.description}
                            impact={formData.impact}
                            files={formData.files}
                            onChange={handleChange}
                            onFileChange={handleFileChange}
                        />
                        <div className="flex justify-between mt-4 bg-main1-1 p-4 rounded">
                            <button type="button" onClick={handleDraftSave} className="p-2 bg-sub-1 text-white rounded">Save Draft</button>
                            <button type="submit" className="p-2 bg-main2-1 text-white rounded">Submit</button>
                        </div>
                    </form>
                </div>
                
                {/* Sidebar Section */}
                <div className="bg-main1-2 text-white p-6 rounded border border-main1-3 shadow-lg flex flex-col space-y-6">
                    <div className="flex flex-col space-y-4">
                        <h2 className="text-xl font-semibold mb-4">Rewards and Statistics</h2>
                        <p className="text-main1-3">Submit your report and potentially earn rewards based on the severity of the issue.</p>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-medium mb-2">Reward Levels:</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Low:</span>
                                <span className="font-bold">$200</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Medium:</span>
                                <span className="font-bold">$500</span>
                            </li>
                            <li className="flex justify-between">
                                <span>High:</span>
                                <span className="font-bold">$1,000</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Critical:</span>
                                <span className="font-bold">$2,000</span>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col space-y-4">
                        <h3 className="text-lg font-medium mb-2">Statistics:</h3>
                        <ul className="space-y-2">
                            <li className="flex justify-between">
                                <span>Total Bounties Paid:</span>
                                <span className="font-bold">$50,000</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Average Bounty:</span>
                                <span className="font-bold">$700</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Top Bounty:</span>
                                <span className="font-bold">$5,000</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Bounties in Last 90 Days:</span>
                                <span className="font-bold">$10,000</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Reports in Last 90 Days:</span>
                                <span className="font-bold">25</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Last Report Resolved:</span>
                                <span className="font-bold">2 days ago</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitReport;
