import React, {Component} from 'react';
import './App.css';
import "./style/css/components/button.css";
import MenuConfig from "./config/Menu";
import Menu from "./component/Menu";
import MenuRoute from "./component/menu/MenuRoute";
import {HashRouter as Router, Route} from "react-router-dom";
import Home from './component/Home';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Menu/>
                    <div className="menu-content">
                        {MenuConfig.map((item, index) => <MenuRoute key={index} item={item}/>)}
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
