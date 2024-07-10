import React from "react";
import styles from "../ListItem.module.css";

const ListItem = ({ todo }) => {
  return (
    <div className={styles.card}>
      <img src={todo.photo} alt={todo.name} className={styles.photo} />
      <h2>{todo.name}</h2>
      <p>{todo.description}</p>
    </div>
  );
};

export default ListItem;
