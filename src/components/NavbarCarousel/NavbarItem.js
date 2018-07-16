import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

export default class NavbarItem extends Component {

    constructor(props) {
        super(props);  
        this.pos = props.pos;
        this.state = {
            isHovering: false,
            isActive: false,
            depth: props.depth
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
                className={this.state.depth}
            ><Link to={this.props.path}>{ this.props.text }</Link></li>
        );
    }
}