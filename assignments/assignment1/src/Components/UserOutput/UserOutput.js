import React from 'react';

const UserOutput = (props) => {


const outputStyle = {
  color: "purple",
  backgroundColor: "yellow",
  fontFamily: "monospace",
  textAlign: "center"
};

  return (
    <div>
    <h1>{props.username}</h1>
    <p> This is my first paragraph of UserOutput </p>
    <p> This is my second paragraph of UserOutput </p>
    </div>
  );
};

export default UserOutput;
