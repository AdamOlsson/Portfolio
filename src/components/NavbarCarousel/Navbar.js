import React, { Component } from 'react';

import NavbarItem from './NavbarItem';

import './css/Navbar.css';


export default class Navbar extends Component {

    constructor() {
        super();
        this.keyCount = 0;
        this.headlines = ["Home", "About Me", "Projects", "Contact"];
        this.state = {
            activeItem: 0,
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(pos) {
        this.setState({
            activeItem: pos,
        });
    }

    render() {
        var pos = 0;
        return(
            <div id="nav" className="navbar">
                <ul style={this.state.offset}>
                    <NavbarItem 
                        key={this.keyCount++}
                        text={"Home"}
                        onClick={this.onClick}
                        path="/home"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={this.keyCount++}
                        text={"About Me"}
                        onClick={this.onClick}
                        path="/about"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={this.keyCount++}
                        text={"Projects"}
                        onClick={this.onClick}
                        path="/projects"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={this.keyCount++}
                        text={"Contact"}
                        onClick={this.onClick}
                        path="/contact"
                        pos={pos++}
                    />
                </ul>
            </div>
        );
    }
}