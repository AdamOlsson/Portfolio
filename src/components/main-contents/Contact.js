import React, { Component } from 'react';
import { FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import { IoIosMailUnread } from 'react-icons/io';

import './css/Contact.css';


export default class Contact extends Component {
    render() {
        var icon_size = 40; // only in px
        return(
            <div className='center' id='contact-content'>
                <h2 className='text-container'>Contact Me</h2>
                <div className='socials-container'>
                    <h3> <FaLinkedin size={icon_size} /> </h3>
                    <h3> <IoIosMailUnread size={icon_size} /></h3>
                    <h3> <FaGithubSquare size={icon_size} /> </h3>
                </div>
            </div>
        );
    }
}