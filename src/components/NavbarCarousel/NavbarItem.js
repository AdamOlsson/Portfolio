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
                //style={ this.state.isHovering ? testStyle1 : testStyle2 }
                onClick={this.onClick}
                className={this.state.depth}
            >{ this.text }</li>
        );
    }
}