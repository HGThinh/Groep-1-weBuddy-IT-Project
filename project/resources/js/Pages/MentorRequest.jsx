import React, { useState } from 'react';

export default function MentorRequest() {
    const [formData, setFormData] = useState({
        role: '',
        courses: [],
        rate: '',
        languages: [],
        location: '',
        motivation_letter: '',
        grades_or_resume: '',
        bio: '',
        keyword1: '',
        keyword2: '',
        keyword3: ''
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

            const response = await fetch('/api/testmentorrequest', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-CSRF-TOKEN': csrfToken,
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Request submitted successfully!');
                setFormData({
                    role: '',
                    courses: [],
                    rate: '',
                    languages: [],
                    location: '',
                    motivation_letter: '',
                    grades_or_resume: '',
                    bio: '',
                    keyword1: '',
                    keyword2: '',
                    keyword3: ''
                });
            } else {
                const data = await response.json();
                setErrors(data.errors || {});
            }
        } catch (error) {
            console.error('Error submitting mentor request:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleCheckboxChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: prev[field].includes(value)
                ? prev[field].filter(item => item !== value)
                : [...prev[field], value]
        }));
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto p-4 mt-8 space-y-6">
            <h1 className="text-2xl font-bold">Mentor Request Form</h1>

            {/* Role */}
            <div>
                <label className="block text-sm font-medium">Role</label>
                <div className="space-y-2">
                    {['Tutor', 'Buddy', 'eBuddy'].map(role => (
                        <label key={role} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="role"
                                value={role}
                                checked={formData.role === role}
                                onChange={() => handleChange('role', role)}
                            />
                            {role}
                        </label>
                    ))}
                </div>
            </div>

            {/* Courses */}
            <div>
                <label className="block text-sm font-medium">Courses</label>
                <div className="space-y-2">
                    {(formData.role === 'Buddy'
                        ? ['How To Study', 'City Exploring', 'Campus Visit', 'Student Associations', 'Other please fill in']
                        : ['Programming Essentials 1', 'Network Essentials', 'IT Essentials', 'Desktop OS', 'Web Essentials']
                    ).map(course => (
                        <label key={course} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="courses"
                                value={course}
                                checked={formData.courses.includes(course)}
                                onChange={() => handleCheckboxChange('courses', course)}
                            />
                            {course}
                        </label>
                    ))}
                </div>
            </div>

            {/* Rate (only for Tutor) */}
            {formData.role === 'Tutor' && (
                <div>
                    <label className="block text-sm font-medium">Rate</label>
                    <div className="space-y-2">
                        {['Free', 'Fill'].map(rate => (
                            <label key={rate} className="flex items-center gap-2">
                                <input
                                    type="radio"
                                    name="rate"
                                    value={rate}
                                    checked={formData.rate === rate}
                                    onChange={() => handleChange('rate', rate)}
                                />
                                {rate}
                            </label>
                        ))}
                    </div>
                </div>
            )}

            {/* Languages */}
            <div>
                <label className="block text-sm font-medium">Languages</label>
                <div className="space-y-2">
                    {['Dutch', 'English', 'French', 'Other please fill in'].map(language => (
                        <label key={language} className="flex items-center gap-2">
                            <input
                                type="checkbox"
                                name="languages"
                                value={language}
                                checked={formData.languages.includes(language)}
                                onChange={() => handleCheckboxChange('languages', language)}
                            />
                            {language}
                        </label>
                    ))}
                </div>
            </div>

            {/* Location */}
            <div>
                <label className="block text-sm font-medium">Location</label>
                <div className="space-y-2">
                    {['Live', 'Online'].map(location => (
                        <label key={location} className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="location"
                                value={location}
                                checked={formData.location === location}
                                onChange={() => handleChange('location', location)}
                            />
                            {location}
                        </label>
                    ))}
                </div>
            </div>

            {/* Motivation Letter */}
            <div>
                <label className="block text-sm font-medium">Motivation Letter</label>
                <textarea
                    value={formData.motivation_letter}
                    onChange={e => handleChange('motivation_letter', e.target.value)}
                    rows={4}
                    className="w-full border rounded-md px-3 py-2"
                />
            </div>

            {/* Grades or Resume */}
            <div>
                <label className="block text-sm font-medium">Grades or Resume</label>
                <input
                    type="text"
                    value={formData.grades_or_resume}
                    onChange={e => handleChange('grades_or_resume', e.target.value)}
                    className="w-full border rounded-md px-3 py-2"
                />
            </div>

            {/* Bio */}
            <div>
                <label className="block text-sm font-medium">Bio</label>
                <textarea
                    value={formData.bio}
                    onChange={e => handleChange('bio', e.target.value)}
                    rows={4}
                    className="w-full border rounded-md px-3 py-2"
                />
            </div>

            {/* Keywords */}
            <div>
                <label className="block text-sm font-medium">Describe Yourself in 3 Keywords</label>
                {['keyword1', 'keyword2', 'keyword3'].map((keyword, index) => (
                    <input
                        key={index}
                        type="text"
                        value={formData[keyword]}
                        onChange={e => handleChange(keyword, e.target.value)}
                        className="w-full border rounded-md px-3 py-2 mt-2"
                        placeholder={`Keyword ${index + 1}`}
                    />
                ))}
            </div>

            {/* Submit */}
            <div>
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 disabled:bg-blue-300"
                >
                    {isSubmitting ? 'Submitting...' : 'Apply'}
                </button>
            </div>
        </form>
    );
}
