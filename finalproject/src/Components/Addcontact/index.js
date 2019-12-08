import React, { Component } from 'react';

class Addcontact extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      added: []

    };
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
        "name": this.state.added.name,
        "number": this.state.added.number
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
        <button className="button" onClick={(event) => {this.props.changemenu(event, 0)} }>Back</button>
        <form onSubmit={this.getValue}>
          <input type="text" id="name" />
          <input type="text" id="number" />
          <button>SUBMIT</button>
        </form>
        <hr />
      </div>
  );
}
}
export default Addcontact;
