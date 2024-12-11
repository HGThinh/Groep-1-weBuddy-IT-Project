import React from 'react';
import styles from './QuestionForm.module.css';

export function QuestionForm() {
  return (
    <form className={styles.container}>
      <h1 className={styles.heading}>Ask a question</h1>

      <label htmlFor="title" className={styles.titleLabel}>Title</label>
      <input 
        id="title"
        type="text"
        className={styles.titleInput}
        aria-label="Question title"
      />

      <label className={styles.tagsLabel}>Tags</label>
      <div className={styles.tagsContainer}>
      <div className={styles.tagItem}>
  
  <select id="course" className={styles.dropdown}>
    <option value="" disabled selected>
      Course
    </option>
    <option value="apple">Apple</option>
    <option value="bear">Bear</option>
    <option value="grapes">Grapes</option>
  </select>
</div>

<div className={styles.tagItem}>
  <input 
    id="Subject" 
    className={styles.textInput} 
    type="text" 
    placeholder="Keywords" 
  />
</div>

<div className={styles.tagItem}>

  <select id="course" className={styles.dropdown}>
    <option value="" disabled selected>
      Type
    </option>
    <option value="apple">Apple</option>
    <option value="bear">Bear</option>
    <option value="grapes">Grapes</option>
  </select>
</div>
        
        {/*<button type="button" className={styles.addTagButton}> 
          <span className={styles.plusIcon}>+</span>
          <span className={styles.addText}>Add</span>
        </button>*/}
      </div>

      <div className={styles.bodySection}>
        <label htmlFor="body" className={styles.bodyLabel}>Body</label>
        <button type="file" className={styles.insertButton}>Choose a file</button>
      </div>

      <textarea
        id="body"
      
        className={styles.bodyInput}
        aria-label="Question body"
      />

     {/* <div className={styles.anonymousSection}>
        <input
          type="checkbox"
          id="anonymous"
          className={styles.checkbox}
        />
        <label htmlFor="anonymous">Post question anonymously</label>
      </div>*/}

      <button type="submit" className={styles.submitButton}>Post</button>
    </form>
  );
}
