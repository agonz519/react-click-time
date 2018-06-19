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

const Panel = () => (
  <div style={styles.panel}>
    <div style={styles.heading}>Current Score: 0 - Highest Score: 0</div>
    <div style={styles.content}>
      <img src={"http://bdfjade.com/data/out/18/5267162-cartoon-picture.png"} alt={"meh"} />
      <img src={"http://bdfjade.com/data/out/18/5267162-cartoon-picture.png"} alt={"meh"} />
      <img src={"http://bdfjade.com/data/out/18/5267162-cartoon-picture.png"} alt={"meh"} />
      <img src={"http://bdfjade.com/data/out/18/5267162-cartoon-picture.png"} alt={"meh"} />
    </div>
  </div>
);

export default Panel;
