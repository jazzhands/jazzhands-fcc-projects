import React, { Component } from "react";

class Navbar extends Component {
    render () {
        return (
            <ul className="header-list App-header" id="navbar">
                <li>jazzhands.github.io</li>
                <li className="header-item">home</li>
                <li className="header-item">about</li>
                <li className="header-item">blog</li>
            </ul>
        );
    }
}

export default Navbar;