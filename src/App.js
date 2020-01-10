import React, { Component, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'


/*
functional App component
const app = props => {
  const [state, modifyState] = useState({
    text: 'this is a test'
  });
  return (
    <h1>{state.text}</h1>
  );
}
*/

class App extends Component {

  state = {
    persons: [
      {name:'Devin', age:24},
      {name:'Bobe', age:3123}
    ]
  }

  nameSwitchHandler = () => {
    //console.log('you clicked my button');
    this.setState(
      {
        persons:[
          {name:'Devi poo', age:24},
          {name:'Bobe', age:4}
        ]
      }
    );
  }

  textFieldChangeHandler = event => {
    this.setState(
      {
        persons:[
          {name:'Devi poo', age:24},
          {name:event.target.value, age:4}
        ]
      }
    );
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.nameSwitchHandler}>This is a button</button>
        <h1>Hi, i'm a react app</h1>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          >
          Hey yo what it do
        </Person>
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.textFieldChangeHandler}
          />
      </div>
    );
  }
}
export default App;
