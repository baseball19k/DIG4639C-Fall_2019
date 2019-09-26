import "./index.css";

class Card {
  constructor(props){
    this.props = props;
  }
  render(){
      return `<div class="card">${this.props.content}</div>`;
  }
}
export default Card;
