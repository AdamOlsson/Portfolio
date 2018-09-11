import React, { Component } from 'react';
import './css/Navbar.css';
import NavbarItem from './NavbarItem';

export default class Navbar extends Component {

    constructor() {
        super();
        this.keyCount = 0;
        this.headlines = ["Home", "About Me", "Projects", "Contact"];
        this.depths = ["depth-0", "depth-1", "depth-2", "depth-3"];
        this.state = {
            activeItem: 0,
            offset: this.centerItem(0)
        };

        this.onClick = this.onClick.bind(this);
        //this.navbar = this.createNavbar();
    }

    onClick(pos) {
        this.setState({
            activeItem: pos,
            offset: this.centerItem(pos),
        });
        console.log(this.state.activeItem);
    }

    centerItem(itemNumber) {
        //TODO: Get ul width automatically
        var x = ((2-itemNumber)*190) -85;
        const trans = { 
            transform: `translate(${x}px)` 
        };
        return trans;
    }

    render() {

        var pos = 0;
        return(
            <div id="nav" className="navbar">
                <ul style={this.state.offset}>
                    <NavbarItem 
                        key={pos}
                        text={"Home"}
                        depth={this.depths[Math.abs(this.state.activeItem - pos)]}
                        onClick={this.onClick}
                        path="/home"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={pos}
                        text={"About Me"}
                        depth={this.depths[[Math.abs(this.state.activeItem - pos)]]} // will be same on init 
                        onClick={this.onClick}
                        path="/about"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={pos}
                        text={"Projects"}
                        depth={this.depths[[Math.abs(this.state.activeItem - pos)]]} // will be same on init 
                        onClick={this.onClick}
                        path="/projects"
                        pos={pos++}
                    />
                    <NavbarItem 
                        key={pos}
                        text={"Contact"}
                        depth={this.depths[[Math.abs(this.state.activeItem - pos)]]} // will be same on init 
                        onClick={this.onClick}
                        path="/contact"
                        pos={pos++}
                    />
                </ul>
            </div>
        );
    }
}