import React, {Component} from "react";
import "isomorphic-fetch";
import "es6-promise";

export default class IndividualPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: ""
        }
    }

    componentDidMount() {
        this.setState({
            post: this.props.match.params.post
        });
    }

    render() {
        return (
            <React.Fragment>
                <h1> {this.state.post} </h1>
            </React.Fragment>
        );
    }
}