import React, { Component } from 'react';
import './App.css';
import List from "./List";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      chirps: [
        { value: "Some value goes here", id: 0 },
        { value: "Another value goes here", id: 1 },
        { value: "More stuff goes here", id: 2 }
      ]
    }
  }

  handleInputChange(value) {
    this.setState({
      inputValue: value
    })
  }

  handlePostAddition() {
    let newArr = [...this.state.chirps];
    newArr.push({
      value: this.state.inputValue, 
      id: newArr.length // +1 doesn't make a difference here
    });
    this.setState({
      chirps: newArr
    });
  }

  render() {
    return (
      <React.Fragment>
        <input placeholder="Write something" onChange={ (event) => this.handleInputChange(event.target.value) }/>
        <button onClick={ (event) => this.handlePostAddition()}> Post </button>
        <List items={this.state.chirps}/>
      </React.Fragment>
    );
  }
}