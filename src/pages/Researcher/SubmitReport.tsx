import React from 'react';
import { useState } from 'react';
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
        navigate('/thank-you');
    };

    return (
        <div className="w-full bg-main1-2">
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
                    {/* Left section */}
                    <div className="md:col-span-3 bg-main1-2 text-white p-4 rounded">
                        <h2 className="text-xl font-semibold mb-2">Navigation</h2>
                        <ul className="space-y-2">
                            <li><a href="#security" className="text-blue-400 hover:underline">Security page</a></li>
                            <li><a href="#guidelines" className="text-blue-400 hover:underline">Program guidelines</a></li>
                            <li><a href="#scope" className="text-blue-400 hover:underline">Scope</a></li>
                            <li><a href="#hacktivity" className="text-blue-400 hover:underline">Hacktivity</a></li>
                            <li><a href="#thanks" className="text-blue-400 hover:underline">Thanks</a></li>
                            <li><a href="#updates" className="text-blue-400 hover:underline">Updates</a></li>
                            <li><a href="#collaborators" className="text-blue-400 hover:underline">Collaborators</a></li>
                        </ul>
                    </div>
                    {/* Middle section */}
                    <div className="md:col-span-6 bg-main1-2 p-4 rounded">
                        <header className="mb-6 text-center">
                            <h1 className="text-3xl font-bold text-white">Submit a Vulnerability Report</h1>
                        </header>
                        <form onSubmit={handleSubmit}>
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
                            <button type="submit" className="mt-4 p-2 bg-blue-600 text-white rounded">Submit</button>
                        </form>
                    </div>
                    {/* Right section */}
                    <div className="md:col-span-3 bg-main1-2 text-white p-4 rounded">
                        <h2 className="text-xl font-semibold mb-2">Rewards and Statistics</h2>
                        <p className="mb-2">Submit your report and potentially earn rewards based on the severity of the issue.</p>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">Reward Levels:</h3>
                            <ul className="space-y-1">
                                <li>Low: $200</li>
                                <li>Medium: $500</li>
                                <li>High: $1,000</li>
                                <li>Critical: $2,000</li>
                            </ul>
                        </div>
                        <div className="mb-4">
                            <h3 className="text-lg font-medium">Statistics:</h3>
                            <ul className="space-y-1">
                                <li>Total Bounties Paid: $50,000</li>
                                <li>Average Bounty: $700</li>
                                <li>Top Bounty: $5,000</li>
                                <li>Bounties in Last 90 Days: $10,000</li>
                                <li>Reports in Last 90 Days: 25</li>
                                <li>Last Report Resolved: 2 days ago</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SubmitReport;
