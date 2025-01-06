import React, { useEffect, useState } from "react";

export default function AdminMentorApplications() {
    const [applications, setApplications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
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

        fetchApplications();
    }, []);

    const handleDelete = async (id) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this application?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`/admin/api-applications/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (!response.ok) {
                throw new Error("Failed to delete application.");
            }

            // Remove the deleted application from the state
            setApplications((prevApplications) =>
                prevApplications.filter((app) => app.id !== id)
            );
        } catch (err) {
            setError(err.message);
        }
    };

    const handleAccept = async (app) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
        try {
            const response = await fetch('/admin/accept-application', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": csrfToken,  // Include CSRF token
                },
                body: JSON.stringify({
                    id: app.id,
                    name: app.name,
                    points: 0, // default points
                    role: app.role,
                    rate: app.rate,
                    tags: app.tags || [], // assuming tags is an array
                    languages: app.languages || [], // make sure languages is included
                    location: app.location,
                    bio: app.bio,
                    motivation_letter: app.motivation_letter,
                    link_resume: app.link_resume, // assuming you have this field
                }),
            });

            if (!response.ok) {
                throw new Error("Failed to accept mentor application.");
            }

            // Optionally remove the accepted application from the UI
            setApplications((prevApplications) =>
                prevApplications.filter((application) => application.id !== app.id)
            );
            alert("Mentor application accepted!");
        } catch (err) {
            setError(err.message);
        }
    };
    if (loading) return <div>Loading...</div>;
    if (error) return <div className="text-red-500">Error: {error}</div>;

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Admin: Mentor Applications</h1>
            <hr className="my-4" />
            <div className="overflow-x-auto">
                <table className="min-w-full border-collapse border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border border-gray-300 px-4 py-2">ID</th>
                            <th className="border border-gray-300 px-4 py-2">Role</th>
                            <th className="border border-gray-300 px-4 py-2">Courses</th>
                            <th className="border border-gray-300 px-4 py-2">Rate</th>
                            <th className="border border-gray-300 px-4 py-2">Languages</th>
                            <th className="border border-gray-300 px-4 py-2">Location</th>
                            <th className="border border-gray-300 px-4 py-2">Bio</th>
                            <th className="border border-gray-300 px-4 py-2">Motivation Letter</th>
                            <th className="border border-gray-300 px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {applications.map((app, index) => (
                            <tr
                                key={app.id}
                                className={`hover:bg-gray-50 ${index !== applications.length - 1 ? 'border-b border-gray-300' : ''}`}
                            >
                                <td className="border border-gray-300 px-4 py-2 text-center">{app.id}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{app.role}</td>
                                <td className="border border-gray-300 px-4 py-2">{app.courses.join(", ")}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{app.rate || "N/A"}</td>
                                <td className="border border-gray-300 px-4 py-2">{app.languages.join(", ")}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center">{app.location}</td>
                                <td className="border border-gray-300 px-4 py-2">{app.bio}</td>
                                <td className="border border-gray-300 px-4 py-2">{app.motivation_letter}</td>
                                <td className="border border-gray-300 px-4 py-2 text-center flex justify-center gap-2">
                                    <button
                                        onClick={() => handleDelete(app.id)}
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                    >
                                        Delete
                                    </button>
                                    <button
                                        onClick={() => handleAccept(app)}
                                        className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600">
                                        Accept
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
