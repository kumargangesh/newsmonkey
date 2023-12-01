import React, { Component } from "react";
import "./Style.css";

class NewsComponent extends Component {
  render() {

    let {title, description, imageURL} = this.props; // destructuring in JavaScript

    return (
      <div className="container">
        <div className="card">
          <img src={imageURL} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            {/* <a href={newsURL} target="_blank" className="btn btn-primary">Read More</a> */}
          </div>
        </div>
      </div>
    );
  }
}

export default NewsComponent;
