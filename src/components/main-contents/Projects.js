import React, { Component } from 'react';
import '../../App.css';
import ProjectItem from './ProjectItem';
import Image1 from './tomato1.jpg';

export default class Projects extends Component {
    render() {
        return(
            <div>
                <h1>Projects</h1>
                <ProjectItem image={Image1} desc="Nostrud aliqua consectetur sint tempor sit officia magna tempor culpa proident pariatur eu sint. Nulla cillum exercitation et enim dolor id id velit nisi veniam consectetur. Commodo laboris sit ea minim esse minim. Exercitation officia amet duis minim occaecat anim ullamco sint aliquip occaecat. Minim laboris et mollit pariatur. Sunt duis nulla exercitation anim anim eiusmod non aliqua adipisicing ipsum amet velit eiusmod. Cupidatat duis sunt enim et aliquip sint velit culpa."/>
                <ProjectItem formatRight={true} image={Image1} desc="Nostrud aliqua consectetur sint tempor sit officia magna tempor culpa proident pariatur eu sint. Nulla cillum exercitation et enim dolor id id velit nisi veniam consectetur. Commodo laboris sit ea minim esse minim. Exercitation officia amet duis minim occaecat anim ullamco sint aliquip occaecat. Minim laboris et mollit pariatur. Sunt duis nulla exercitation anim anim eiusmod non aliqua adipisicing ipsum amet velit eiusmod. Cupidatat duis sunt enim et aliquip sint velit culpa."/>
                <ProjectItem image={Image1} desc="Nostrud aliqua consectetur sint tempor sit officia magna tempor culpa proident pariatur eu sint. Nulla cillum exercitation et enim dolor id id velit nisi veniam consectetur. Commodo laboris sit ea minim esse minim. Exercitation officia amet duis minim occaecat anim ullamco sint aliquip occaecat. Minim laboris et mollit pariatur. Sunt duis nulla exercitation anim anim eiusmod non aliqua adipisicing ipsum amet velit eiusmod. Cupidatat duis sunt enim et aliquip sint velit culpa."/>
            </div>
        );
    }
}