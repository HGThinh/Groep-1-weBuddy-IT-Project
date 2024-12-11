import React from "react";
import styles from "./ForumQuestion.module.css";
import { Tag, StatusTag } from "./Tag";
import ActionButton from "./ActionButton";

const ForumQuestion = () => {
  const tags = [
    { text: "programmingEssentials" },
    { text: "javascript" },
    { text: "for-loop" },
    { text: "chapter2" },
    { text: "explanation" },
  ];

  const actions = [
    {
      icon: //https
      text: "3",
    },
    {
      icon: //https
    },
    {
      icon: //https
      text: "Save",
    },
    {
      icon: //https
      text: "Alert",
    },
    {
      icon: //https
      text: "Report",
    },
  ];

  return (
    <div className={styles.forumQuestion}>
      <div className={styles.questionCard}>
        <div className={styles.header}>
          <div className={styles.userInfo}>
            <img
              loading="lazy"
              src=//https
              className={styles.userAvatar}
              alt="User avatar"
            />
            <div>Mariana Z.</div>
          </div>
          <div className={styles.postMetadata}>
            Posted 35 minutes ago in Programming Essentials
          </div>
        </div>
        <h1 className={styles.questionTitle}>
          How does a for-loop work in JavaScript?
        </h1>
        <div className={styles.tagContainer}>
          <StatusTag
            icon="https://cdn.builder.io/api/v1/image/assets/TEMP/d83366daab4e03f4b127d60142d4e45c862d43e024518983965e419acbd70729?placeholderIfAbsent=true&apiKey=48979fe6d3fb43ac802c38ca06ffa6fc"
            text="In progress"
          />
          {tags.map((tag, index) => (
            <Tag key={index} text={tag.text} />
          ))}
        </div>
        <div className={styles.questionContent}>
          I don't quite understand how a for-loop works and what exactly the
          different parts do. Can someone give a simple example with explanation
          please?
        </div>
        <div className={styles.actionBar}>
          {actions.map((action, index) => (
            <ActionButton key={index} icon={action.icon} text={action.text} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ForumQuestion;
