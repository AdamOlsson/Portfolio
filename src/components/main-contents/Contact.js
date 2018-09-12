import React, { Component } from 'react';
import { FaLinkedin, FaGithubSquare} from 'react-icons/fa';
import { IoIosMailUnread } from 'react-icons/io';
import '../../App.css';
import './css/Contact.css';


export default class Contact extends Component {
    render() {
        return(
            <div>
                <h2>Contact Me</h2>
                <h3><FaLinkedin /></h3>
                <h3><IoIosMailUnread /></h3>
                <h3><FaGithubSquare /></h3>
            </div>
        );
    }
}