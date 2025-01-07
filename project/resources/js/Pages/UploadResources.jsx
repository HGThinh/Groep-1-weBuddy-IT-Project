import React, { useState, useEffect } from "react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import axios from "axios";
import styles from "@/Components/UploadResource.module.css";

const UploadResources = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [tags, setTags] = useState([]);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");
    const [selectedCourse, setSelectedCourse] = useState("");

    // List of courses to choose from
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        // Fetch courses from the Laravel API
        axios
            .get("/api/courses") // Adjust the endpoint based on your Laravel route
            .then((response) => {
                setCourses(response.data.map((course) => course.course)); // Assuming the `name` field contains the course name
            })
            .catch((error) => {
                console.error("Error fetching courses:", error);
                setMessage("Unable to load courses.");
            });
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleCourseChange = (course) => {
        setSelectedCourse(course);
        if (!tags.includes(course)) {
            setTags((prevTags) => [...prevTags, course]); // Add course as a tag
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const cleanedTags = tags
            .map((tag) => tag.trim())
            .filter((tag) => tag !== "");

        // Prepare form data
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("type", type);
        cleanedTags.forEach((tag) => formData.append("tags[]", tag)); // Send cleaned tags
        formData.append("file", file);

        try {
            const response = await fetch(
                "http://127.0.0.1:8000/resources/add",
                {
                    method: "POST",
                    body: formData,
                    headers: {
                        "X-CSRF-TOKEN": document.querySelector(
                            'meta[name="csrf-token"]'
                        ).content,
                    },
                }
            );

            const result = await response.json();
            if (response.ok) {
                setMessage("Resource uploaded successfully!");
                setTitle("");
                setDescription("");
                setType("");
                setTags([]);
                setFile(null);
                setSelectedCourse("");
            } else {
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            setMessage("An error occurred while uploading the resource.");
        }
    };

    return (
        <>
            <Navbar items={courses} />

            <div>
                <br />
                {message && <p>{message}</p>}

                <form onSubmit={handleSubmit}>
                    <h2>Upload Resource</h2>

                    <div>
                        <label>Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Description</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label>Tags</label>
                        <input
                            type="text"
                            value={tags.join(", ")}
                            onChange={(e) =>
                                setTags(
                                    e.target.value
                                        .split(",")
                                        .map((tag) => tag.trim())
                                )
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Choose Course</label>
                        <select
                            value={selectedCourse}
                            onChange={(e) => handleCourseChange(e.target.value)}
                        >
                            <option value="">Select a course</option>
                            {courses.map((course, index) => (
                                <option key={index} value={`.${course}`}>
                                    .{course}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div>
                        <label>Upload File</label>
                        <input
                            type="file"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    <button type="submit">Upload</button>
                </form>
            </div>

            <Foote />
        </>
    );
};

export default UploadResources;
