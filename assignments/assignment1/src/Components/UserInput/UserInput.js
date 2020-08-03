import React from 'react';
import './UserInput.css';


const UserInput = (props) => {

const styleObj = {
   fontSize: 20,
   color: "#4a54f1",
   textAlign: "center",
   paddingTop: "10px",
}
  return (
    <div className="UserInput">
      <h1 style={styleObj}>please input something {props.username}</h1>
      <input type="text" onChange={props.changed}/>
    </div>
  );
};

export default UserInput;
