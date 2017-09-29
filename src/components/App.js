import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import AppActions from "../actions/AppActions";
import AppStore from "../stores/AppStore";

class App extends Component {
    render() {
        function handleClick() {
            AppActions.addItem('this is the item');
        }

        return(
            <div className="wrapper">
                <h3 onClick={this.handleClick}>Click this Title, then check console.</h3>
            </div>
        )
    }
}

export default App;
