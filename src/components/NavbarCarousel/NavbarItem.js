import React, { Component } from 'react';


export default class NavbarItem extends Component {

    constructor(props) {
        super(props);
        this.handleMouseHover = this.handleMouseHover.bind(this);
        this.handleMouseClick = this.handleMouseClick.bind(this);
        this.state = {
            text: props.text,
            isHovering: false,
            isActive: false
        };
    }

    handleMouseHover() {
        this.setState(this.toggleHoverState);
    }

    toggleHoverState(state) {
        return {
            isHovering: !state.isHovering
        };
    }

    handleMouseClick() {
        this.setState(this.toggleActiveState);
        this.props.onClick(this.props.pos);
    }

    toggleActiveState(state) {
        return {
            isActive: !state.isActive
        };
    }

    render() {
        const testStyle1 = {
            backgroundColor: "#F6BB42"
        };

        const testStyle2 = {
            backgroundColor: "#81b71a"
        };

        return(
            <li
                onMouseEnter={this.handleMouseHover}
                onMouseLeave={this.handleMouseHover}
                style={ this.state.isHovering ? testStyle2 : testStyle1}
                pos={this.state.pos}
                onClick={this.handleMouseClick}
            >{ this.state.text }</li>
        );
    }
}