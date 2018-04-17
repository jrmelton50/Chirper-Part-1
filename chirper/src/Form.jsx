import React, { Component } from "react";

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ""
        }
    }

    handleInputChange(value) {
        this.setState({
            message: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (event === "") {
            return;
        }
        this.props.handlePost(this.state.message)
    }

    render() {
        return (
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <div className="form-group">
                    <input className="form-control" placeholder="Write something" onChange={(event) => this.handleInputChange(event.target.value)} />
                </div>
                <div className="form-group">
                    <button type="submit"> Post </button>
                </div>
            </form>


            // <form action="">
            //     <input placeholder="Write something" onChange={(event) => this.handleInputChange(event.target.value)} />
            //     <button onClick={(event) => this.props.handlePost(this.state.message)}> Post </button>
            // </form>
        );
    }
}