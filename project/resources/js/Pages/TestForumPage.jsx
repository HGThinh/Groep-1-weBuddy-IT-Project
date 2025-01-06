import { Head, Link } from "@inertiajs/react";
import Navbar from "@/Components/Navbar";
import Question from "@/Components/QuestionForum";
import styles from "@/Components/Forum.module.css";
import Foote from "@/Components/Foote";
import { useState, useEffect } from "react";

export default function Welcome({ auth, questions: initialQuestions = [] }) {
    const [questions, setQuestions] = useState(initialQuestions);
    const [filteredQuestions, setFilteredQuestions] = useState(initialQuestions);
    const [value, setValue] = useState(0);
    const [filters, setFilters] = useState({
        type: {
            tutor: false,
            student: false
        },
        language: {
            dutch: false,
            english: false,
            french: false
        },
        location: '',
        maxRate: 0
    });

    const handleFilterChange = (category, value) => {
        setFilters(prev => ({
            ...prev,
            [category]: value
        }));
    };

    const handleTypeChange = (type) => {
        setFilters(prev => ({
            ...prev,
            type: {
                ...prev.type,
                [type]: !prev.type[type]
            }
        }));
    };

    const handleLanguageChange = (language) => {
        setFilters(prev => ({
            ...prev,
            language: {
                ...prev.language,
                [language]: !prev.language[language]
            }
        }));
    };

    useEffect(() => {
        // Filter questions based on filters
        const applyFilters = () => {
            const filtered = questions.filter((question) => {
                // Filter by type
                const typeFilter = Object.entries(filters.type).some(
                    ([key, value]) => value && question.type === key
                );

                // Filter by language
                const languageFilter = Object.entries(filters.language).some(
                    ([key, value]) => value && question.language === key
                );

                // Filter by location
                const locationFilter = filters.location
                    ? question.location === filters.location
                    : true;

                // Filter by max rate
                const rateFilter =
                    filters.maxRate > 0 ? question.rate <= filters.maxRate : true;

                // Combine all filters
                return (
                    (typeFilter || !Object.values(filters.type).includes(true)) &&
                    (languageFilter || !Object.values(filters.language).includes(true)) &&
                    locationFilter &&
                    rateFilter
                );
            });

            setFilteredQuestions(filtered);
        };

        applyFilters();
    }, [filters, questions]);

    return (
        <div className="min-h-screen bg-gray-100">
            <Navbar items={["Programming Essentials I", "Network Essentials", "IT Essentials"]} />
            <div className={styles.ContainerMenor}>
                <div className={styles.container}>
                    <Link href={route('question.create')} className={styles.headerSection}>
                        <span>+</span>
                        <h2 className={styles.headerTitle}>Ask a question</h2>
                    </Link>

                    <h3 className={styles.sectionTitle}>Filter by</h3>

                    {/* Type Filter */}
                    <h4 className={styles.filterTitle}>Type</h4>
                    <div className={styles.filterGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filters.type.tutor}
                                onChange={() => handleTypeChange('tutor')}
                            />
                            <span className={styles.labelText}>Tutor</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filters.type.student}
                                onChange={() => handleTypeChange('student')}
                            />
                            <span className={styles.labelText}>Student</span>
                        </label>
                    </div>

                    {/* Language Filter */}
                    <h4 className={styles.filterTitle}>Language</h4>
                    <div className={styles.filterGroup}>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filters.language.dutch}
                                onChange={() => handleLanguageChange('dutch')}
                            />
                            <span className={styles.labelText}>Dutch</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filters.language.english}
                                onChange={() => handleLanguageChange('english')}
                            />
                            <span className={styles.labelText}>English</span>
                        </label>
                        <label className={styles.checkboxLabel}>
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                checked={filters.language.french}
                                onChange={() => handleLanguageChange('french')}
                            />
                            <span className={styles.labelText}>French</span>
                        </label>
                    </div>

                    {/* Rate Filter */}
                    <h4 className={styles.filterTitle}>Max Rate Per Hour</h4>
                    <div className={styles.filterGroup}>
                        <div className={styles.rangeContainer}>
                            <span className={styles.rangeLabel}>€0</span>
                            <input
                                type="range"
                                min="0"
                                max="15"
                                value={value}
                                onChange={(e) => {
                                    setValue(e.target.value);
                                    handleFilterChange('maxRate', e.target.value);
                                }}
                                className={styles.rangeInput}
                            />
                            <span className={styles.rangeLabel}>€{value}</span>
                        </div>
                    </div>
                </div>

                <div className={styles.content}>
                    {filteredQuestions.length > 0 ? (
                        <Question data={filteredQuestions} />
                    ) : (
                        <div className="text-center py-8">
                            <p className="text-gray-500">No questions found</p>
                        </div>
                    )}
                </div>
            </div>
            <Foote />
        </div>
    );
}
