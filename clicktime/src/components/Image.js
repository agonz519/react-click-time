import React from 'react';

const image = (props) => {
  return (
      <img src={props.src} alt={props.alt} onClick={props.onclick} data-clicked={props.clicked} />
  )
};

export default image;