import React from 'react';
import "../Style.css";

function Projects(props) {
  return (
    <div className='data' style={props.design}>
        <h1 style={props.design}>{props.heading}</h1>
        <div className="line" style={props.divBack} />
        <p style={props.design}>{props.data}</p>
    </div>
  )
}

export default Projects;
