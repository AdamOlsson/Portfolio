import React from 'react';
import './css/ProjectItem.css'

const ProjectItem = (props) => {
    const format = props.formatRight ? 'right' : '';
    return(
        <div className={"projectItem"}>
            <div className={"image-container " + format}>
                <img src={props.image} />
            </div>
            <div className="text-container">
                <h3>Project title</h3>
                <p>{props.desc}</p>
            </div>
        </div>
    );
};

export default ProjectItem;