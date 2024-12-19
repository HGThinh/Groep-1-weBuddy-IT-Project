import React from "react";
import styles from "./QuestionForum.module.css";

// Question component
const Question = ({
    Name,
    ProfilePicture,
    TimePosted,
    Catgeory,
    QuestionTitle,
    BoolAnswered,
    tags,
    Question,
    upvotes,
    comments,
}) => {
    return (
        <div className={styles.Question}>
            <div>
                <div className={styles.containernameimage}>
                    <div className={styles.containerImg}>
                        <img
                            src={ProfilePicture}
                            alt={`${Name}'s profile`}
                            onError={(e) =>
                                (e.target.src = "Images/UserProfileNoPic.png")
                            } // Fallback image
                        />
                    </div>
                    <h2>
                        {Name} | Posted {TimePosted} ago in <a>{Catgeory}</a>
                    </h2>
                </div>
                <ul className={styles.tags}>
                    <li className={styles.Anwsered}>
                        {BoolAnswered ? "Answered" : "Not Answered"}
                    </li>
                    {tags.map((tag, index) => (
                        <li className={styles.tag} key={index}>
                            {tag}
                        </li>
                    ))}
                </ul>
                <h3>{QuestionTitle}</h3>
                <p className={styles.textbox}>{Question}</p>
                <p className={styles.footerQuestion}>
                    <a href="">
                        <img src="Images/arrow-circle-up.svg" alt="" />{" "}
                        {upvotes}{" "}
                    </a>
                    <a href="">
                        <img src="Images/message-circle.svg" alt="" />
                        {comments}
                    </a>
                    <a href="">
                        <img src="Images/flag-1.svg" alt="" /> Report
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
            {data.map((question, index) => (
                <Question key={index} {...question} />
            ))}
        </div>
    );
};

export default QuestionForum;
