import React, { Component } from "react";

export default class List extends Component {
    render() {
        let listItems = this.props.items.map((item) => {
            return (
                <li key={item.id}> {item.value} </li>
            );
        });

        return (
            <ul> {listItems} </ul>
        );
    }
}