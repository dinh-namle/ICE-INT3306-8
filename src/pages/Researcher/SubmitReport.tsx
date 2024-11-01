import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFormData({
                ...formData,
                files: Array.from(e.target.files),
            });
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const { asset, weakness, title, description, impact } = formData;
        if (asset && weakness && title && description && impact) {
            alert('Report submitted successfully!');
            // Navigate to the desired route
            navigate('/report-success');
        } else {
            alert('Please fill out all required fields.');
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen" style={{ backgroundColor: '#0B121F' }}>
            <div className="form-container p-8 shadow-md rounded-lg space-y-6" style={{ backgroundColor: '#182232', color: '#fff', width: '80%' }}>
                <h1 className="text-2xl font-bold text-center mb-6">Submit Vulnerability Report</h1>
                <form id="reportForm" className="space-y-4" onSubmit={handleSubmit}>
                    {/* Part 1: Asset */}
                    <div className="flex items-start">
                        <div className="step-number" style={{ borderRadius: '50%', backgroundColor: '#2d3748', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>1</div>
                        <div className="step-container p-2 rounded" style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F', flex: '1' }}>
                            <h2 className="text-xl font-semibold mb-2">Asset</h2>
                            <p className="font-light">Select the attack surface of this issue.</p>
                            <select id="asset" name="asset" className="w-full p-2 rounded" required value={formData.asset} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                <option value="">Select Asset</option>
                                <option value="uet.vnu.edu.vn">uet.vnu.edu.vn (Domain - critical - Eligible for bounty)</option>
                                <option value="fit.uet.vnu.edu.vn">fit.uet.vnu.edu.vn (Domain - critical - Eligible for bounty)</option>
                                <option value="fet.vnu.edu.vn">fet.vnu.edu.vn (Domain - critical - Eligible for bounty)</option>
                            </select>
                        </div>
                    </div>
                    {/* Part 2: Weakness */}
                    <div className="flex items-start">
                        <div className="step-number" style={{ borderRadius: '50%', backgroundColor: '#2d3748', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>2</div>
                        <div className="step-container p-2 rounded" style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F', flex: '1' }}>
                            <h2 className="text-xl font-semibold mb-2">Weakness</h2>
                            <p className="font-light">Select the type of the potential issue you have discovered. Can't pick just one? Select the best match or submit a separate report for each distinct weakness.</p>
                            <select id="weakness" name="weakness" className="w-full p-2 rounded" required value={formData.weakness} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                <option value="">Select Weakness</option>
                                <option value="Absolute Path Traversal">Absolute Path Traversal (CAPEC-597)</option>
                                <option value="Acceptance of Extraneous Untrusted Data">Acceptance of Extraneous Untrusted Data With Trusted Data</option>
                                <option value="Access Control Check After Asset Access">Access Control Check Implemented After Asset is Accessed</option>
                                <option value="Accessing Functionality Not Constrained by ACLs">Accessing Functionality Not Properly Constrained by ACLs</option>
                            </select>
                        </div>
                    </div>
                    {/* Part 3: Severity */}
                    <div className="flex items-start">
                        <div className="step-number" style={{ borderRadius: '50%', backgroundColor: '#2d3748', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>3</div>
                        <div className="step-container p-2 rounded" style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F', flex: '1' }}>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Severity(Optional)</h2>
                            <p className="font-light">Estimate the severity of this issue.</p>
                            <div className="grid grid-cols-1 gap-4">
                                <div>
                                    <label htmlFor="attack_vector" className="block mb-1 font-medium">Attack Vector:</label>
                                    <select id="attack_vector" name="attack_vector" className="w-full p-2 rounded" value={formData.attack_vector} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="Network">Network</option>
                                        <option value="Adjacent">Adjacent</option>
                                        <option value="Local">Local</option>
                                        <option value="Physical">Physical</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="attack_complexity" className="block mb-1 font-medium">Attack Complexity:</label>
                                    <select id="attack_complexity" name="attack_complexity" className="w-full p-2 rounded" value={formData.attack_complexity} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="Low">Low</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="privileges_required" className="block mb-1 font-medium">Privileges Required:</label>
                                    <select id="privileges_required" name="privileges_required" className="w-full p-2 rounded" value={formData.privileges_required} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="None">None</option>
                                        <option value="Low">Low</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="user_interaction" className="block mb-1 font-medium">User Interaction:</label>
                                    <select id="user_interaction" name="user_interaction" className="w-full p-2 rounded" value={formData.user_interaction} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="None">None</option>
                                        <option value="Required">Required</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="scope" className="block mb-1 font-medium">Scope:</label>
                                    <select id="scope" name="scope" className="w-full p-2 rounded" value={formData.scope} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="Unchanged">Unchanged</option>
                                        <option value="Changed">Changed</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="confidentiality_impact" className="block mb-1 font-medium">Confidentiality Impact:</label>
                                    <select id="confidentiality_impact" name="confidentiality_impact" className="w-full p-2 rounded" value={formData.confidentiality_impact} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="None">None</option>
                                        <option value="Low">Low</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="integrity_impact" className="block mb-1 font-medium">Integrity Impact:</label>
                                    <select id="integrity_impact" name="integrity_impact" className="w-full p-2 rounded" value={formData.integrity_impact} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="None">None</option>
                                        <option value="Low">Low</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="availability_impact" className="block mb-1 font-medium">Availability Impact:</label>
                                    <select id="availability_impact" name="availability_impact" className="w-full p-2 rounded" value={formData.availability_impact} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}>
                                        <option value="None">None</option>
                                        <option value="Low">Low</option>
                                        <option value="High">High</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                   {/* Part 4: Proof of Concept */}
                   <div className="flex items-start">
                        <div className="step-number" style={{ borderRadius: '50%', backgroundColor: '#2d3748', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>4</div>
                        <div className="step-container p-2 rounded" style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F', flex: '1' }}>
                        <div>
                            <h2 className="text-xl font-semibold mb-2">Proof of Concept</h2>
                            <label htmlFor="title" className="block mb-1 font-medium">Title:</label>
                            <input type="text" id="title" name="title" className="w-full p-2 rounded" required value={formData.title} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }} />
                            <label htmlFor="description" className="block mb-1 font-medium">Description:</label>
                            <textarea id="description" name="description" className="w-full p-2 rounded" required value={formData.description} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}></textarea>
                            <label htmlFor="impact" className="block mb-1 font-medium">Impact:</label>
                            <textarea id="impact" name="impact" className="w-full p-2 rounded" required value={formData.impact} onChange={handleChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }}></textarea>
                            <label htmlFor="files" className="block mb-1 font-medium">Attach Files:</label>
                            <input type="file" id="files" name="files" multiple className="w-full p-2 rounded" onChange={handleFileChange} style={{ backgroundColor: '#1E2939', color: '#fff', border: '1px solid #0B121F' }} />
                        </div>
                    </div>
                    </div>
                    {/* Part 5: Buttons */}
                    <div className="flex justify-between pt-4">
                        <button type="button" className="bg-gray-500 text-white p-2 rounded hover:bg-gray-600">Create Draft</button>
                        <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600">Submit Report</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default SubmitReport;
