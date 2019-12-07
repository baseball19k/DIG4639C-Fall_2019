import React from "react";
import "./index.css";

class Contact extends React.Component {

  render() {
    return(
      <div className="contact">        
        <h3>{this.props.name}</h3>
        <p>{this.props.number}</p>
      </div>
    );
  }
}

export default Contact;
