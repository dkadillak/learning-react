import React from "react";

const CharComponent = (props) => {
  const charTile = {
      display: "inline-block",
      padding: "16px",
      textAlign: "center",
      margin: "16px",
      border: "1px solid black"
  };

  return (
      <div style={charTile} onClick={props.click}> {props.letter} </div>
  );

};


export default CharComponent;
