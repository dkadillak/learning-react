import React from 'react';
import styled from 'styled-components';

const StyleDiv = styled.div`
  width: 60%;
  margin: auto;
  border: 1px solid #eee;
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width : 500px){
    width: 450px
  }
`;

 const person = (props) => {
  return (
    <StyleDiv>
      <h1 onClick={props.click}>
        my name is {props.name}
        and I am {props.age}
        years old
      </h1>
      <p>{props.children}</p>
      <input type='text' onChange={props.changed} value={props.name}/>
  </StyleDiv>);
}

export default person;
