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
    padding: "0 20px",
  }
};

const Navbar = () => (
  <div style={styles.panel}>
    <div style={styles.heading}>Click the below pictures without clicking any repeats. If you do, your score will be reset to zero! zip! nada!</div>
  </div>
);

export default Navbar;
