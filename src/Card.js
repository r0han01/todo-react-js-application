import React from 'react';
import styles from './Card.module.css';  // Scoped CSS for the Card component

function Card({ title, description }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  );
}

export default Card;
