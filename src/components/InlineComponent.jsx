import React from "react";
// const header = { color: "blue", fontSize: "140px" };
// import "../css/style.css";
import styles from "./inlinecomponent.module.css";
export default function InlineComponent() {
  return (
    <div>
      {/* <h1 style={header}>Inline Component</h1>
       */}
      <h1 className={styles.header}>Inline Component</h1>
    </div>
  );
}
