import React, { Component } from 'react';
import './css/Navbar.css';
import NavbarItem from './NavbarItem';

export default class Navbar extends Component {
    constructor() {
        super();
        this.keyCount = 0;
        this.state = {
            headlines: ["Home", "About Me", "Projects", "Contact"],
            activeItem: 0
        };
    }

    onClick(pos) {
        this.setState({
            activeItem: pos
        });
        console.log(pos);
    }

    render() {
        var pos = 0;
        var items = this.state.headlines.map((headline) => {
            return <NavbarItem 
                key={this.keyCount++}
                text={headline} 
                pos={pos++} 
                onClick={this.onClick.bind(this)}
            />
        });
        console.log(items);
        return(
            <div id="nav" className="navbar">
                <ul>
                    {items}
                </ul>
            </div>
        );
    }
}