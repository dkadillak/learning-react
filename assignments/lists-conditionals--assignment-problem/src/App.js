import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent';
import CharComponent from './CharComponent';

class App extends Component {

  state = {
      inputLength: 0,
      input: ""
    };

    textChangeListener = (event) => {
      this.setState({
        inputLength:event.target.value.length,
        input: event.target.value
      });
    };

    clickHandler = (index) => {
      const inputText = this.state.input.split("");
      inputText.splice(index,1);
      const updatedInput = inputText.join("");
      this.setState({
        input: updatedInput,
        inputLength: updatedInput.length
      });
    };


  render() {
    const strikeThrough = {
      textDecoration: "line-through",
      color: "pink"
    };

    const chars = (
      <div>
      {
      this.state.input.split("").map( (char, index) => {
        return (
          <CharComponent letter={char} key={index} click={() => this.clickHandler(index)}/>
        )
        }
      )
    }
    </div>
    );
  return (


      <div className="App">
        <ol>
          <li style={strikeThrough}>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li style={strikeThrough}>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li style={strikeThrough}>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li style={strikeThrough}>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li style={strikeThrough}>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li style={strikeThrough}>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>

        <input type='text'onChange={this.textChangeListener} value={this.state.input}/>
        <p>the length of the text you entered:{this.state.inputLength}</p>
        <ValidationComponent length={this.state.inputLength}/>
        {chars}
      </div>
    );
  }
}

export default App;
