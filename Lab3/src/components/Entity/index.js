import React from "react";
import "./index.css";


class Entity extends React.Component {
  render(){
      return(<div className="entity">{this.props.content}</div>);
  }
}
export default Entity;
