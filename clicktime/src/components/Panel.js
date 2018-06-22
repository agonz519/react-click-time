import React from "react";

const styles = {
  panel: {
    margin: 20,
    background: "#e8eaf6"
  },
  heading: {
    background: "#3f51b5",
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: "1.2rem",
    color: "white",
    padding: "0 20px"
  },
  content: {
    padding: 20
  }
};

const Panel = (props) => (
  <div style={styles.panel}>
    <div style={styles.heading}>Current Score: 0 - Highest Score: 0</div>
    <div style={styles.content}>
      {props.children}
    </div>
  </div>
);

export default Panel;
