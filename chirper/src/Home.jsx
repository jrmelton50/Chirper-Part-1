import React, {Component} from "react";
import List from "./List";
import Form from "./Form";

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
    
      handlePostAddition(value) {
        let newArr = [...this.state.chirps];
        newArr.push({
          value: value,
          id: newArr.length // +1 doesn't make a difference here
        });
        this.setState({
          chirps: newArr,
          inputValue: value
        });
      }

    render() {
        return (
            <React.Fragment>
                <Form ref="form" handlePost={(value) => this.handlePostAddition(value)} />
                <List items={this.state.chirps} />
            </React.Fragment>
        );

    }

}