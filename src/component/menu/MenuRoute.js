import React, {Component, Fragment} from 'react';
import MenuRouteItem from "./MenuRoute";
import {Route} from "react-router-dom";

class MenuRoute extends Component {
    render() {
        return (
            <Fragment>
                {
                    this.props.item.path && this.props.item.component ?
                        <Route path={this.props.item.path} component={this.props.item.component}/> :
                        ""
                }
                {
                    this.props.item.childrens && this.props.item.childrens.length ?
                        this.props.item.childrens.map((child, index) => <MenuRouteItem key={index} item={child}/>) :
                        ""
                }
            </Fragment>
        );
    }
}

export default MenuRoute;
