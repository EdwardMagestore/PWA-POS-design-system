import "../style/css/menu.css";
import React, {Component} from 'react';
import MenuItem from './menu/Item';
import MenuConfig from "../config/Menu";

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                {MenuConfig.map((item, index) => <MenuItem key={index} item={item}/>)}
            </div>
        );
    }
}

export default Menu;
