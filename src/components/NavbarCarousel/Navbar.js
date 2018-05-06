import React, { Component } from 'react';
import './css/Navbar.css';
import NavbarItem from './NavbarItem';

export default class Navbar extends Component {

    constructor() {
        super();
        this.keyCount = 0;        

        this.state = {
            headlines: ["Home", "About Me", "Projects", "Contact"],
            activeItem: 0,
            offset: this.centerItem(0)
        };

        this.onClick = this.onClick.bind(this);
    }

    onClick(pos) {
        this.setState({
            activeItem: pos,
            offset: this.centerItem(pos)
        });
    }

    centerItem(itemNumber) {
        var x = ((2-itemNumber)*100) -50;
        const trans = { 
            transform: `translate(${x}px)` 
        };
        return trans;
    }

    setDepth(pos) {

    }

    render() {
        var pos = 0;
        var items = this.state.headlines.map((headline) => {
            return <NavbarItem 
                key={this.keyCount++}
                text={headline} 
                pos={pos++} 
                onClick={this.onClick}
                depth='depth-0'
            />
        });

        return(
            <div id="nav" className="navbar">
                <ul style={this.state.offset}>
                    {items}
                </ul>
            </div>
        );
    }
}