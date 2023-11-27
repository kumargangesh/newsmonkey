import React from 'react';
import "../Style.css";

function Home(props) {
  return (
    <div className='data' style={props.design}>
        <h1 style={props.design}>{props.heading}</h1>
        <div className="line" style={props.divBack} />
        <p style={props.design}>{props.data}</p>
    </div>
  )
}

export default Home;
