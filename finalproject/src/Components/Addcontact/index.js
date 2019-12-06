import React, { Component } from 'react';

class Addcontact extends React.Component {

  constructor(props) {
    super(props);

    this.state = {added: {}};

  }
  getValue = (event) => {

    event.preventDefault();

    const name = document.querySelector("#name").value;
    const number = document.querySelector("#number").value;

    this.setState({"name": name, "number": number});

  }
  componentDidMount() {

    fetch("https://apiexample.website/contacts/add", {
      "method": "POST",
      "headers": {
        "api": "clement",
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      "body": JSON.stringify({
        "name": "",
        "number": ""
      })
    })
    .then(response => response.json() )
    .then((data) => this.setState({added: data.added}) )
    .catch(err => {
      console.log(err);
    });

  }
render(){
  return(
    <div>
        <form onSubmit={this.getValue}>
          <input type="text" id="name" />
          <input type="text" id="number" />
          <button>SUBMIT</button>
        </form>
        <hr />
        <p>{this.state.name}</p>
        <p>{this.state.number}</p>
        <button className="button" onClick={(event) => {this.props.changemenu(event, 0)} }>Return</button>
      </div>
  );
}
}
export default Addcontact;
