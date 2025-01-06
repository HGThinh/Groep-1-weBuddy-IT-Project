import React, { useState } from 'react';
import axios from 'axios';

const UploadResources = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [tags, setTags] = useState([]);
    const [file, setFile] = useState(null);
    const [message, setMessage] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]); // Set the file state
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object to send the file and other form data
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('type', type);
        formData.append('tags', JSON.stringify(tags)); // Tags as a JSON string
        formData.append('file', file); // Add the file

        try {
            // Send the data to the backend (Laravel API)
            const response = await axios.post('http://localhost/api/upload-resource', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Required for file uploads
                },
            });

            // Handle successful response
            setMessage(response.data.message); // Success message
        } catch (error) {
            // Handle error
            console.error("Error uploading resource:", error);
            setMessage("Failed to upload resource");
        }
    };

    return (
        <div>
            <h2>Upload Resource</h2>
            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>
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
                    <label>Type</label>
                    <select
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    >
                        <option value="">Select Type</option>
                        <option value="txt">Text</option>
                        <option value="pdf">PDF</option>
                        <option value="ppt">PPT</option>
                        <option value="doc">DOC</option>
                    </select>
                </div>

                <div>
                    <label>Tags</label>
                    <input
                        type="text"
                        value={tags.join(', ')}
                        onChange={(e) => setTags(e.target.value.split(',').map(tag => tag.trim()))}
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
    );
};

export default UploadResources;
