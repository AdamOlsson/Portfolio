import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import './css/NavbarItem.css';
import '../css/TextContainer.css';

export default class NavbarItem extends Component {

    constructor(props) {
        super(props);  
        this.pos = props.pos;
        this.state = {
            isHovering: false,
            isActive: false,
        };

        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        };
    }

    onClick() {
        this.props.onClick(this.pos);
    }

    render() {
        return(
            <li
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
                onClick={this.onClick}
                className='text-container'
            ><Link to={this.props.path}>{ this.props.text }</Link></li>
        );
    }
}