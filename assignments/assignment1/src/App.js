import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import UserOutput from './Components/UserOutput/UserOutput'
import UserInput from './Components/UserInput/UserInput'

/*
Create TWO new components: UserInput and UserOutput
UserInput should hold an input element, UserOutput two paragraphs
Output multiple UserOutput components in the App component (any paragraph texts of your choice)
Pass a username (of your choice) to UserOutput via props and display it there
Add state to the App component (=> the username) and pass the username to the UserOutput component
Add a method to manipulate the state (=> an event-handler method)
Pass the event-handler method reference to the UserInput component and bind it to the input-change event
Ensure that the new input entered by the user overwrites the old username passed to UserOutput
Add two-way-binding to your input (in UserInput) to also display the starting username
Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets
*/
class App extends Component{

  state = {
    username: "Devin"
  };

  onInputChangeHandler = (event) => {
    this.setState({username: event.target.value});
  }
render() {
  return (
    <div>
    <h1> HOLY SHIT </h1>
    <UserInput username={this.state.username} changed={(event) => this.onInputChangeHandler(event)}>
    </UserInput>
    <UserOutput username={this.state.username}></UserOutput>
    <UserOutput username="blah blah"></UserOutput>
    </div>
  );
}

}
export default App;
