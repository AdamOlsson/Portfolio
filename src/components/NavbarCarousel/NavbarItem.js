import React, { Component } from 'react';


export default class NavbarItem extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.pos = props.pos;
        this.text = props.text;
        this.state = {
            isHovering: false,
            isActive: false,
            depth: props.depth
        };

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
            >{ this.text }</li>
        );
    }
}