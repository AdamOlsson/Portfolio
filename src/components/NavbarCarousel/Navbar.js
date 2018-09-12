import React, { Component } from 'react';
import './css/Navbar.css';
import NavbarItem from './NavbarItem';

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
        console.log(this.state.activeItem);
    }

    render() {
        var pos = 0;
        return(
            <div id="nav" className="navbar">
                <ul style={this.state.offset}>
                    <NavbarItem 
                        key={pos}
                        text={"Home"}
                        onClick={this.onClick}
                        path="/home"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={pos}
                        text={"About Me"}
                        onClick={this.onClick}
                        path="/about"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={pos}
                        text={"Projects"}
                        onClick={this.onClick}
                        path="/projects"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={pos}
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