// import { useState, useEffect } from "react";
// import Mentor from "@/Components/Mentor";
// import Navbar from "@/Components/Navbar";
// import Foote from "@/Components/Foote";
// import styles from "@/Components/Mentorpage.module.css";

// export default function Welcome({ auth, mentors }) {
//     const [mentorList, setMentorList] = useState(mentors || []);
//     const [value, setValue] = useState(15);
//     const [selectedFilters, setSelectedFilters] = useState({
//         role: [],
//         language: [],
//         location: "",
//         maxRate: 15,
//     });

//     useEffect(() => {
//         console.log('Received mentors:', mentors);
//         setMentorList(mentors);
//     }, [mentors]);

//     const filterMentors = () => {
//         return mentorList.filter((mentor) => {
//             const isRoleValid =
//                 selectedFilters.role.length === 0 ||
//                 selectedFilters.role.includes(mentor.role);
//             const isLanguageValid =
//                 selectedFilters.language.length === 0 ||
//                 mentor.languages?.some((language) =>
//                     selectedFilters.language.includes(language)
//                 );
//             const isLocationValid =
//                 selectedFilters.location === "" ||
//                 mentor.location === selectedFilters.location ||
//                 selectedFilters.location === "Both";
//             const isRateValid =
//                 mentor.rate === 'Free' ||
//                 (typeof mentor.rate === 'number' && mentor.rate <= selectedFilters.maxRate);

//             return isRoleValid && isLanguageValid && isLocationValid && isRateValid;
//         });
//     };

//     const courses = [
//         "Programming Essentials 1",
//         "Advanced React",
//         "Web Development Basics",
//         "Web essentials",
//         "IT essentials",
//         "Network essentials",
//         "Programming essentials 2",
//         "Data Essentials",
//         "Desktop OS",
//         "Italent 1",
//         "Software Design essentials"
//     ];

//     return (
//         <>
//             <Navbar items={courses} />
//             <div className={styles.ContainerMenor}>
//                 <div className={styles.container}>
//                     <a href={route('mentor.request')} className={styles.headerSection}>
//                         <span>+</span>
//                         <h2 className={styles.headerTitle}>Become a mentor</h2>
//                     </a>

//                     {/* Filters */}
//                     <div className={styles.filters}>
//                         <h3 className={styles.sectionTitle}>Filter by</h3>

//                         {/* Role Filter */}
//                         <div className={styles.filterSection}>
//                             <h4 className={styles.filterTitle}>Type</h4>
//                             <div className={styles.filterGroup}>
//                                 {['Tutor', 'Buddy', 'eBuddy'].map((role) => (
//                                     <label key={role} className={styles.checkboxLabel}>
//                                         <input
//                                             type="checkbox"
//                                             className={styles.checkbox}
//                                             checked={selectedFilters.role.includes(role)}
//                                             onChange={() =>
//                                                 setSelectedFilters((prev) => ({
//                                                     ...prev,
//                                                     role: prev.role.includes(role)
//                                                         ? prev.role.filter((r) => r !== role)
//                                                         : [...prev.role, role],
//                                                 }))
//                                             }
//                                         />
//                                         <span className={styles.labelText}>{role}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Language Filter */}
//                         <div className={styles.filterSection}>
//                             <h4 className={styles.filterTitle}>Language</h4>
//                             <div className={styles.filterGroup}>
//                                 {['Dutch', 'English', 'French'].map((language) => (
//                                     <label key={language} className={styles.checkboxLabel}>
//                                         <input
//                                             type="checkbox"
//                                             className={styles.checkbox}
//                                             checked={selectedFilters.language.includes(language)}
//                                             onChange={() =>
//                                                 setSelectedFilters((prev) => ({
//                                                     ...prev,
//                                                     language: prev.language.includes(language)
//                                                         ? prev.language.filter((l) => l !== language)
//                                                         : [...prev.language, language],
//                                                 }))
//                                             }
//                                         />
//                                         <span className={styles.labelText}>{language}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Location Filter */}
//                         <div className={styles.filterSection}>
//                             <h4 className={styles.filterTitle}>Location</h4>
//                             <div className={styles.filterGroup}>
//                                 {['Live', 'Online', 'Both'].map((loc) => (
//                                     <label key={loc} className={styles.radioLabel}>
//                                         <input
//                                             type="radio"
//                                             name="location"
//                                             className={styles.radio}
//                                             checked={selectedFilters.location === loc}
//                                             onChange={() =>
//                                                 setSelectedFilters((prev) => ({
//                                                     ...prev,
//                                                     location: loc,
//                                                 }))
//                                             }
//                                         />
//                                         <span className={styles.labelText}>{loc}</span>
//                                     </label>
//                                 ))}
//                             </div>
//                         </div>

//                         {/* Rate Filter */}
//                         <div className={styles.filterSection}>
//                             <h4 className={styles.filterTitle}>Max Rate Per Hour</h4>
//                             <div className={styles.filterGroup}>
//                                 <div className={styles.rangeContainer}>
//                                     <span className={styles.rangeLabel}>€0</span>
//                                     <input
//                                         type="range"
//                                         min="0"
//                                         max="15"
//                                         value={value}
//                                         onChange={(e) => {
//                                             setValue(e.target.value);
//                                             setSelectedFilters(prev => ({
//                                                 ...prev,
//                                                 maxRate: parseInt(e.target.value)
//                                             }));
//                                         }}
//                                         className={styles.rangeInput}
//                                     />
//                                     <span className={styles.rangeLabel}>€{value}</span>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Mentor List */}
//                 <div className={styles.mentorListContainer}>
//                     {filterMentors().length > 0 ? (
//                         filterMentors().map((mentor) => (
//                             <div className={styles.mentorCard} key={mentor.id}>
//                             <Mentor
//                                 id={mentor.id}
//                                 name={mentor.name}
//                                 points={mentor.points}
//                                 role={mentor.role}
//                                 tags={mentor.tags ? JSON.parse(mentor.tags) : []} // Parse JSON string to array
//                                 description={mentor.description}
//                                 languages={mentor.languages ? JSON.parse(mentor.languages) : []} // Parse JSON string to array
//                                 location={mentor.location}
//                                 bio={mentor.bio}
//                                 motivation_letter={mentor.motivation_letter}
//                                 created_at={mentor.created_at}
//                                 updated_at={mentor.updated_at}
//                                 user_id={mentor.user_id}
//                             />
//                             </div>
//                         ))
//                     ) : (
//                         <p className={styles.noMentors}>No mentors available.</p>
//                     )}
//                 </div>
//             </div>
//             <Foote />
//         </>
//     );
// }


//////////
import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Mentor from "@/Components/Mentor";
import styles from "@/Components/Mentorpage.module.css";
import Foote from "@/Components/Foote";
import { useState, useEffect } from "react";

export default function Welcome({ mentors }) {
    const [value, setValue] = useState(0);
    const [filters, setFilters] = useState({
        type: {
            tutor: false,
            student: false,
        },
        language: {
            dutch: false,
            english: false,
            french: false,
        },
        location: '',
    });
    const [filteredMentors, setFilteredMentors] = useState(mentors);

    const courses = [
        "Programming Essentials 1",
        "Advanced React",
        "Web Development Basics",
        "Web essentials",
        "IT essentials",
        "Network essentials",
        "Programming essentials 2",
        "Data Essentials",
        "Desktop OS",
        "Italent 1",
        "Software Design essentials"
    ];

    const handleFilterChange = (category, key) => {
        if (category === 'location') {
            setFilters(prev => ({
                ...prev,
                location: key,
            }));
        } else {
            setFilters(prev => ({
                ...prev,
                [category]: {
                    ...prev[category],
                    [key]: !prev[category][key],
                },
            }));
        }
    };

    useEffect(() => {
        const filtered = mentors.filter(mentor => {
            // Type filter
            if (filters.type.tutor && mentor.role !== 'Tutor') return false;
            if (filters.type.student && mentor.role !== 'Student') return false;

            // Language filter
            const selectedLanguages = Object.entries(filters.language)
                .filter(([_, selected]) => selected)
                .map(([lang]) => lang.charAt(0).toUpperCase() + lang.slice(1));

            if (selectedLanguages.length > 0 &&
                !selectedLanguages.some(lang => mentor.languages.includes(lang))) {
                return false;
            }

            // Location filter
            if (filters.location && mentor.location !== filters.location) return false;

            return true;
        });

        setFilteredMentors(filtered);
    }, [filters, mentors]);

    return (
        <>
            <Navbar items={courses} />
            <div className={styles.ContainerMenor}>
                <div className={styles.container}>
                    <a href="#" className={styles.headerSection}>
                        <span>+</span>
                        <h2 className={styles.headerTitle}>Become a mentor</h2>
                    </a>

                    <h3 className={styles.sectionTitle}>Filter by</h3>

                    {/* Type filters */}
                    <h4 className={styles.filterTitle}>Type</h4>
                    <div className={styles.filterGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filters.type.tutor}
                                onChange={() => handleFilterChange('type', 'tutor')}
                            />
                            <span className={styles.labelText}>Tutor</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filters.type.student}
                                onChange={() => handleFilterChange('type', 'student')}
                            />
                            <span className={styles.labelText}>Student</span>
                        </label>
                    </div>

                    {/* Language filters */}
                    <h4 className={styles.filterTitle}>Language</h4>
                    <div className={styles.filterGroup}>
                        {Object.entries({
                            dutch: 'Dutch',
                            english: 'English',
                            french: 'French'
                        }).map(([key, label]) => (
                            <label key={key} className={styles.checkboxLabel}>
                                <input
                                    type="checkbox"
                                    className={styles.checkbox}
                                    checked={filters.language[key]}
                                    onChange={() => handleFilterChange('language', key)}
                                />
                                <span className={styles.labelText}>{label}</span>
                            </label>
                        ))}
                    </div>

                    {/* Location filters */}
                    <h4 className={styles.filterTitle}>Location</h4>
                    <div className={styles.filterGroup}>
                        {['Live', 'Online', 'Both'].map(location => (
                            <label key={location} className={styles.radioLabel}>
                                <input
                                    type="radio"
                                    name="location"
                                    className={styles.radio}
                                    checked={filters.location === location}
                                    onChange={() => handleFilterChange('location', location)}
                                />
                                <span className={styles.labelText}>{location}</span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className={styles.mentorGrid}>
                    {filteredMentors.map(mentor => (
                        <Mentor
                            key={mentor.id}
                            name={mentor.name}
                            points={mentor.points}
                            role={mentor.role}
                            tags={mentor.tags}
                            description={mentor.description}
                            bio={mentor.bio}
                        />
                    ))}
                </div>
            </div>
            <Foote />
        </>
    );
}
