import React, { useState } from 'react';
import axios from 'axios';

const MentorApplication = () => {
    const [formData, setFormData] = useState({
        roles: [],
        courses: [],
        otherCourse: '',
        mode: '',
        languages: '',
        motivation: '',
        resume: null
    });

    const handleCheckboxChange = (e, type) => {
        const { value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [type]: checked
                ? [...prev[type], value]
                : prev[type].filter(item => item !== value)
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        setFormData(prev => ({
            ...prev,
            resume: e.target.files[0]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const submitData = new FormData();
        Object.keys(formData).forEach(key => {
            if (key === 'roles' || key === 'courses') {
                submitData.append(key, JSON.stringify(formData[key]));
            } else {
                submitData.append(key, formData[key]);
            }
        });

        try {
            const response = await axios.post('/api/mentor-applications', submitData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            if (response.status === 200) {
                alert('Application submitted successfully!');
                // Reset form or redirect
            }
        } catch (error) {
            console.error('Error submitting application:', error);
            alert('Error submitting application. Please try again.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">weBuddy Mentorship Application</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Choose your role:</h2>
                    {['Tutor', 'eBuddy', 'Buddy'].map(role => (
                        <label key={role} className="block">
                            <input
                                type="checkbox"
                                value={role}
                                onChange={(e) => handleCheckboxChange(e, 'roles')}
                                className="mr-2"
                            />
                            {role}
                        </label>
                    ))}
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Courses</h2>
                    {[
                        'Programming Essentials',
                        'Web Essentials',
                        'Web Advanced',
                        'Software Design',
                        'Programming Essentials 2',
                        'Network Essentials',
                        'ITalent',
                        'Data Essentials',
                        'Programming Project'
                    ].map(course => (
                        <label key={course} className="block">
                            <input
                                type="checkbox"
                                value={course}
                                onChange={(e) => handleCheckboxChange(e, 'courses')}
                                className="mr-2"
                            />
                            {course}
                        </label>
                    ))}
                    <div>
                        <label className="block">Other:</label>
                        <input
                            type="text"
                            name="otherCourse"
                            onChange={handleInputChange}
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        />
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Type</h2>
                    {['Online', 'Hybrid', 'In-Person'].map(mode => (
                        <label key={mode} className="block">
                            <input
                                type="radio"
                                name="mode"
                                value={mode}
                                onChange={handleInputChange}
                                className="mr-2"
                            />
                            {mode}
                        </label>
                    ))}
                </div>

                <div>
                    <label className="block text-xl font-semibold">Languages</label>
                    <input
                        type="text"
                        name="languages"
                        onChange={handleInputChange}
                        placeholder="E.g., English, French"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                    />
                </div>

                <div>
                    <label className="block text-xl font-semibold">Motivation Letter</label>
                    <textarea
                        name="motivation"
                        onChange={handleInputChange}
                        rows="5"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm"
                        placeholder="Write your motivation here..."
                    />
                </div>

                <div>
                    <label className="block text-xl font-semibold">Grades or Resume</label>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf"
                        className="mt-1 block w-full"
                    />
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
                >
                    Submit Application
                </button>
            </form>
        </div>
    );
};

export default MentorApplication;
