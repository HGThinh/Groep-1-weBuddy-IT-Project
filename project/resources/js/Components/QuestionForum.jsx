import React from 'react';
import styles from './QuestionForum.module.css';

// Individual Question component
const Question = ({ data }) => {
    return (
        <div className={styles.Question}>
            <div>
                <div className={styles.containernameimage}>
                    <div className={styles.containerImg}>
                        <img
                            src="/Images/UserProfileNoPic.png"
                            alt="Default profile"
                            onError={(e) => (e.target.src = "/Images/UserProfileNoPic.png")}
                        />
                    </div>
                    <h2>
                        Anonymous | Posted {data.created_at} ago in <a>{data.category}</a>
                    </h2>
                </div>
                <ul className={styles.tags}>
                    <li className={styles.Anwsered}>
                        Not Answered
                    </li>
                    {data.tags.map((tag, index) => (
                        <li className={styles.tag} key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <h3>{data.title}</h3>
                <p className={styles.textbox}>{data.content}</p>
                <p className={styles.footerQuestion}>
                    <a href="">
                        <img src="/Images/arrow-circle-up.svg" alt="" /> 0
                    </a>
                    <a href="">
                        <img src="/Images/message-circle.svg" alt="" /> 0
                    </a>
                    <a href="">
                        <img src="/Images/flag-1.svg" alt="" /> Report
                    </a>
                </p>
            </div>
        </div>
    );
};

// QuestionForum component
const QuestionForum = ({ data }) => {
    return (
        <div className={styles.QuestionForum}>
            {data.map((question) => (
                <Question key={question.id} data={question} />
            ))}
        </div>
    );
};

export default QuestionForum;
