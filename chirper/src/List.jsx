import React, { Component } from "react";
import {Link} from "react-router-dom";

export default class List extends Component {
    render() {
        let listItems = this.props.items.map((item) => {
            return (
                <div className="row" key={item.id} >
                    <div className="col-md-2 pl-0"></div>
                    <div className="card col-md-8">
                        <div className="card-body">
                            <p className="blockquote mb-0"> {item.value} </p>
                            <Link className="btn btn-primary" to={`/${item.value}`}> View Post </Link>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div className="container pl-0 mt-5"> {listItems} </div>
        );
    }
}