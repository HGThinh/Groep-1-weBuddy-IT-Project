import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminReview = () => {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await axios.get('/admin/api-applications');
            setApplications(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching applications:', error);
            setLoading(false);
        }
    };

    const handleApplicationStatus = async (id, status) => {
        try {
            await axios.put(`/admin/api-applications/${id}`, { status });
            // Refresh applications list
            fetchApplications();
            alert(`Application ${status === 'approved' ? 'approved' : 'rejected'} successfully`);
        } catch (error) {
            console.error('Error updating application:', error);
            alert('Error updating application status');
        }
    };

    if (loading) {
        return <div className="text-center p-6">Loading...</div>;
    }

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">Mentor Applications Review</h1>
            <div className="space-y-6">
                {applications.map(app => (
                    <div key={app.id} className="border rounded-lg p-6 shadow-sm">
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h2 className="text-xl font-semibold mb-4">Application Details</h2>
                                <div className="space-y-2">
                                    <p><strong>Roles:</strong> {app.roles.join(', ')}</p>
                                    <p><strong>Courses:</strong> {app.courses.join(', ')}</p>
                                    <p><strong>Mode:</strong> {app.mode}</p>
                                    <p><strong>Languages:</strong> {app.languages}</p>
                                </div>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Motivation</h3>
                                <p className="text-gray-700">{app.motivation}</p>
                                {app.resume && (
                                    <div className="mt-4">
                                        <a
                                            href={`/storage/${app.resume}`}
                                            target="_blank"
                                            className="text-blue-600 hover:underline"
                                        >
                                            View Resume/Grades
                                        </a>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="mt-6 flex space-x-4">
                            <button
                                onClick={() => handleApplicationStatus(app.id, 'approved')}
                                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
                            >
                                Approve
                            </button>
                            <button
                                onClick={() => handleApplicationStatus(app.id, 'rejected')}
                                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AdminReview;
