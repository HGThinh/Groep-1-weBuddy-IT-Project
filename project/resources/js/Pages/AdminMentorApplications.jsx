import React, { useEffect, useState } from "react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";

export default function AdminMentorApplications() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedApplication, setSelectedApplication] = useState(null);

    const courses = [
        "Programming Essentials",
        "Advanced React",
        "Web Development Basics",
        "Programming Essentials 2",
        "IT Essentials",
        "Desktop OS",
        "Network essentials",
    ];

    useEffect(() => {
        fetchApplications();
    }, []);

    const fetchApplications = async () => {
        try {
            const response = await fetch('/admin/api-applications');
            if (!response.ok) {
                throw new Error("Failed to fetch mentor applications.");
            }
            const data = await response.json();
            setApplications(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this application?");
        if (!confirmDelete) return;

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
            const response = await fetch(`/admin/delete-applications/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to delete application.");
            }

            setApplications((prevApplications) =>
                prevApplications.filter((app) => app.id !== id)
            );
            alert("Application deleted successfully!");
        } catch (err) {
            setError(err.message);
        }
    };

    const handleAccept = async (app) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        try {
            // Convert keywords to tags array
            const tags = [app.keyword1, app.keyword2, app.keyword3].filter(Boolean);

            const mentorData = {
                id: app.id,
                name: "New Mentor", // You might want to get this from the user/auth system
                points: 0,
                role: app.role,
                rate: app.rate,
                tags: tags,
                languages: app.languages,
                location: app.location,
                bio: app.bio,
                motivation_letter: app.motivation_letter,
            };

            const response = await fetch('/admin/accept-application', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,
                },
                body: JSON.stringify(mentorData),
            });

            if (!response.ok) {
                throw new Error("Failed to accept mentor application.");
            }

            setApplications((prevApplications) =>
                prevApplications.filter((application) => application.id !== app.id)
            );
            alert("Mentor application accepted!");
        } catch (err) {
            setError(err.message);
            alert("Error accepting application: " + err.message);
        }
    };

    const viewDetails = (app) => {
        setSelectedApplication(app);
    };

    if (loading) return (
        <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-red-500 text-center p-4">
            Error: {error}
        </div>
    );

    return (
        <>
            <Navbar items={courses} />
            <div className="max-w-7xl mx-auto p-4">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Mentor Applications Management</h1>

                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="min-w-full">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Languages</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {applications.map((app) => (
                                    <tr key={app.id} className="hover:bg-gray-50">
                                        <td className="px-6 py-4 whitespace-nowrap">{app.id}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{app.role}</td>
                                        <td className="px-6 py-4">{typeof app.languages === 'string' ? JSON.parse(app.languages).join(", ") : app.languages.join(", ")}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">{app.location}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex space-x-2">
                                                <button
                                                    onClick={() => viewDetails(app)}
                                                    className="bg-blue-500 text-white px-3 py-1 rounded-md hover:bg-blue-600 transition-colors"
                                                >
                                                    View
                                                </button>
                                                <button
                                                    onClick={() => handleAccept(app)}
                                                    className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors"
                                                >
                                                    Accept
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(app.id)}
                                                    className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                                                >
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Application Details Modal */}
                {selectedApplication && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                        <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                            <h2 className="text-2xl font-bold mb-4">Application Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold">Role:</h3>
                                    <p>{selectedApplication.role}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Courses:</h3>
                                    <p>{typeof selectedApplication.courses === 'string'
                                        ? JSON.parse(selectedApplication.courses).join(", ")
                                        : selectedApplication.courses.join(", ")}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Languages:</h3>
                                    <p>{typeof selectedApplication.languages === 'string'
                                        ? JSON.parse(selectedApplication.languages).join(", ")
                                        : selectedApplication.languages.join(", ")}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Bio:</h3>
                                    <p>{selectedApplication.bio}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Motivation Letter:</h3>
                                    <p>{selectedApplication.motivation_letter}</p>
                                </div>
                                <div>
                                    <h3 className="font-bold">Keywords:</h3>
                                    <p>{[
                                        selectedApplication.keyword1,
                                        selectedApplication.keyword2,
                                        selectedApplication.keyword3
                                    ].join(", ")}</p>
                                </div>
                                <button
                                    onClick={() => setSelectedApplication(null)}
                                    className="mt-4 bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Foote />
        </>
    );
}
