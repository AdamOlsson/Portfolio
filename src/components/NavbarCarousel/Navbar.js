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
    }

    onClick(pos) {
        this.setState({
            activeItem: pos,
            offset: this.centerItem(pos)
        });
    }

    centerItem(itemNumber) {
        //TODO: Get ul width automatically
        var x = ((2-itemNumber)*190) -85;
        const trans = { 
            transform: `translate(${x}px)` 
        };
        return trans;
    }

    setDepth(pos) {

    }

    render() {
        var pos = 0;
        var items = this.headlines.map((headline) => {
            var depth = Math.abs(this.state.activeItem - pos);
            return <NavbarItem 
                key={this.keyCount++}
                text={headline}
                depth={this.depths[depth]} // will be same on init
                pos={pos++} 
                onClick={this.onClick}
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