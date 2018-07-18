import React, { Component } from 'react';
import { SocialIcon } from 'react-social-icons';
import '../../App.css';
import './css/Contact.css';


export default class Contact extends Component {
    render() {
        return(
            <div className="page-header">
                <h2>Contact Me</h2>
                    <div className="socials-container">
                        <SocialIcon url="mailto:olsson.95_@hotmail.com" style={{ height: 100, width: 100 }} /> 
                        <SocialIcon url="https://www.linkedin.com/in/adam-olsson-engineer/" style={{ height: 100, width: 100 }}/>
                    </div>
            </div>
        );
    }
}