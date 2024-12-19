import React from 'react';

export const Part1: React.FC<{ asset: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; }> = ({ asset, onChange }) => (
    <div className="flex items-start">
        <div className="step-number bg-main1-1" style={{ borderRadius: '50%', color: 'white', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>1</div>
        <div className="step-container p-2 rounded bg-main1-1 text-white border flex-1">
            <h2 className="text-xl font-semibold mb-2">Asset</h2>
            <p className="font-light">Select the attack surface of this issue.</p>
            <select 
                id="asset" 
                name="asset" 
                className="w-full p-2 rounded bg-main1-1 text-white border"
                required 
                value={asset} 
                onChange={onChange}
            >
                <option value="">Select Asset</option>
                <option value="uet.vnu.edu.vn">uet.vnu.edu.vn (Domain - critical - Eligible for bounty)</option>
                <option value="fit.uet.vnu.edu.vn">fit.uet.vnu.edu.vn (Domain - critical - Eligible for bounty)</option>
                <option value="fet.vnu.edu.vn">fet.vnu.edu.vn (Domain - critical - Eligible for bounty)</option>
            </select>
        </div>
    </div>
);

export const Part2: React.FC<{ weakness: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; }> = ({ weakness, onChange }) => (
    <div className="flex items-start">
        <div className="step-number bg-main1-1" style={{ borderRadius: '50%', color: 'white', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>2</div>
        <div className="step-container p-2 rounded bg-main1-1 text-white border flex-1">
            <h2 className="text-xl font-semibold mb-2">Weakness</h2>
            <p className="font-light">Select the type of the potential issue you have discovered.</p>
            <select 
                id="weakness" 
                name="weakness" 
                className="w-full p-2 rounded bg-main1-1 text-white border"
                required 
                value={weakness} 
                onChange={onChange}
            >
                <option value="">Select Weakness</option>
                <option value="Absolute Path Traversal">Absolute Path Traversal (CAPEC-597)</option>
                <option value="Acceptance of Extraneous Untrusted Data">Acceptance of Extraneous Untrusted Data With Trusted Data</option>
                <option value="Access Control Check After Asset Access">Access Control Check Implemented After Asset is Accessed</option>
                <option value="Accessing Functionality Not Constrained by ACLs">Accessing Functionality Not Properly Constrained by ACLs</option>
            </select>
        </div>
    </div>
);

export const Part3: React.FC<{ formData: any; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; }> = ({ formData, onChange }) => (
    <div className="flex items-start">
        <div className="step-number bg-main1-1" style={{ borderRadius: '50%', color: 'white', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>3</div>
        <div className="step-container p-2 rounded bg-main1-1 text-white border flex-1">
            <h2 className="text-xl font-semibold mb-2">Severity (Optional)</h2>
            <p className="font-light">Estimate the severity of this issue.</p>
            <div className="grid grid-cols-1 gap-4">
                {['attack_vector', 'attack_complexity', 'privileges_required', 'user_interaction', 'scope', 'confidentiality_impact', 'integrity_impact', 'availability_impact'].map((field, index) => (
                    <div key={index}>
                        <label htmlFor={field} className="block mb-1 font-medium">{field.replace(/_/g, ' ').replace(/\b\w/g, char => char.toUpperCase())}:</label>
                        <select 
                            id={field} 
                            name={field} 
                            className="w-full p-2 rounded bg-main1-1 text-white border"
                            value={formData[field]} 
                            onChange={onChange}
                        >
                            <option value="None">None</option>
                            <option value="Low">Low</option>
                            <option value="High">High</option>
                            <option value="Critical">Critical</option>
                        </select>
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export const Part4: React.FC<{ title: string; description: string; impact: string; files: File[]; onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void; onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void; }> = ({ title, description, impact, files, onChange, onFileChange }) => (
    <div className="flex items-start">
        <div className="step-number bg-main1-1" style={{ borderRadius: '50%', color: 'white', fontSize: '2rem', width: '3rem', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '16px' }}>4</div>
        <div className="step-container p-2 rounded bg-main1-1 text-white border flex-1">
            <h2 className="text-xl font-semibold mb-2">Proof of Concept</h2>
            <p className="font-light">Provide a clear proof of concept or additional documentation.</p>
            <input 
                type="text" 
                id="title" 
                name="title" 
                placeholder="Title" 
                value={title} 
                onChange={onChange} 
                className="w-full p-2 rounded mb-4 bg-main1-1 text-white border" 
                required 
            />
            <textarea 
                id="description" 
                name="description" 
                placeholder="Description" 
                value={description} 
                onChange={onChange} 
                className="w-full p-2 rounded mb-4 bg-main1-1 text-white border" 
                required 
            />
            <input 
                type="text" 
                id="impact" 
                name="impact" 
                placeholder="Impact" 
                value={impact} 
                onChange={onChange} 
                className="w-full p-2 rounded mb-4 bg-main1-1 text-white border" 
                required 
            />
            <input 
                type="file" 
                onChange={onFileChange} 
                multiple 
                className="mb-4 bg-main1-1 text-white"
            />
            <p>Selected Files: {files.map(file => file.name).join(', ')}</p>
        </div>
    </div>
);
