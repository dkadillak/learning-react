import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${props => props.blah ? 'red' : 'green'};
  color: black;
  padding: 8px;
  border: 1px solid blue;
  font: inherit;
  cursor: pointer;
  &:hover {
    background-color: green;
    color: yellow;
  }
`;

class App extends Component {

  state = {
    persons: [
      {
        name: 'Devin',
        age: 24,
        id: 'hladf'
      }, {
        name: 'Bobe',
        age: 3123,
        id: 'kajoi'
      }, {
        name: 'Bush Printzle',
        age: 40,
        id: '9ihsdl'
      }
    ],
    displayNames: false
  }

  textFieldChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  nameToggleHandler = () => {
    this.setState((prevState) => {
      return {
        displayNames: !prevState.displayNames
      }
    });
  }

  deletePersonHandler = (index) => {
    //make a copy of the persons array, don't want to modify the original reference
    //update the state in an immutable fashion, i.e. update state without mutating the original state first.
    const modifiedPersons = [...this.state.persons];
    modifiedPersons.splice(index, 1);
    this.setState({persons: modifiedPersons});
  }

  render() {
    let people = null;
    let dynamicStyling = [];
    if (this.state.persons.length <= 2) {
      dynamicStyling.push('red');
    }
    if (this.state.persons.length <= 1) {
      dynamicStyling.push('bold');
    }

    if (this.state.displayNames) {
      people = (<div>
        {
          this.state.persons.map((person, index) => {
            return (<Person name={person.name} age={person.age} changed={(event) => this.textFieldChangeHandler(event, person.id)} click={() => this.deletePersonHandler(index)} key={person.id}/>)
          })
        }
      </div>);
    }
    //displayNames={this.state.displayNames}
    return (<div className="App">
      <h1>Hi, i'm a react app</h1>
      <p className={dynamicStyling.join(' ')}>This is some text i'll change based on the number of people i'm displaying!</p>
      <StyledButton blah={true} onClick={this.nameToggleHandler}>
        Toggle persons
      </StyledButton>
      {people}
    </div>);
  }
}
export default App;
