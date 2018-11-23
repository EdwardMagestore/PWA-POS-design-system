import React, {Component} from 'react';
import MenuItem from "./Item";
import {Link} from "react-router-dom";

class Item extends Component {
    render() {
        return (
            <div className={this.props.item.type + " " + this.props.item.className}>
                {
                    this.props.item.path ?
                        <Link to={this.props.item.path}>{this.props.item.label}</Link> :
                        <Link to={"#"}>{this.props.item.label}</Link>
                }
                {
                    this.props.item.childrens && this.props.item.childrens.length ?
                        this.props.item.childrens.map((child, index) => <MenuItem key={index} item={child}/>) :
                        ""
                }
            </div>
        );
    }
}

export default Item;
