import React, { useState } from "react";
import Navbar from "@/Components/Navbar";
import Foote from "@/Components/Foote";
import styles from "@/Components/UploadResource.module.css";
const UploadResources = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [tags, setTags] = useState([]);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Prepare form data
        const formData = new FormData();
        formData.append("title", title);
        formData.append("description", description);
        formData.append("type", type);
        formData.append("tags[]", tags); // This sends tags as an array
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
            } else {
                setMessage(`Error: ${result.message}`);
            }
        } catch (error) {
            setMessage("An error occurred while uploading the resource.");
        }
    };

    return (
        <>
            <Navbar
                items={[
                    "Programming Essentials",
                    "Advanced React",
                    "Web Development Basics",
                    "Programming Essentials 2",
                    "IT Essentials",
                    "Desktop OS",
                    "Network essentials",
                ]}
            />

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
            <Foote></Foote>
        </>
    );
};

export default UploadResources;
