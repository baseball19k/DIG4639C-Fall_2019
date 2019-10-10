import React from "react";
import Chicken from "../Chicken/index.js";

class Example2 extends React.Component{
    constructor(props){
      super(props);
      this.state = {chickens: []};
    }
    addElement = () => {
      let localChickens = this.state.chickens;
      localChickens.push(<Chicken />);
      this.setState({chickens: localChickens});

    }

    removeElement = () => {
      let localChickens = this.state.chickens;
      localChickens.pop();
      this.setState({chickens: localChickens});
    }

    render(){
      return(
        <div>
          <button onClick={this.addElement}>Click me!</button>
          <button onClick={this.removeElement}>Remove Chickens</button>
            {this.state.chickens.map(
              (chicken, index) => {
              return(<p> key={index}>{chicken}</p>);
            }
          )}
        </div>
      );
    }
}
export default Example2;
