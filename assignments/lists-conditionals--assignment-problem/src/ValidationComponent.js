import React from "react";


const ValidationComponent = (props) => {
  let lengthStatus = (
    <div>
      <p> The text length is too short! </p>
    </div>
  );

  if(props.length > 4){
    lengthStatus = (
      <div>
        <p> The text length is long enough. </p>
      </div>
    )
  }
  return (
    lengthStatus
  );

};

export default ValidationComponent;
