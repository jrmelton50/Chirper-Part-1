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
                <div className="form-group row">
                    <div className="col-md-2"></div>
                    <input className="form-control col-md-8 mt-5" placeholder="Write something" onChange={(event) => this.handleInputChange(event.target.value)} />
                </div>
                <div className="form-group row">
                    <div className="col-md-2"></div>
                    <button className="btn btn-primary col-md-1" type="submit"> Post </button>
                </div>
            </form>
        );
    }
}