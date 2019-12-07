import React from "react";

class Newcontact extends React.Component {

  componentDidMount() {

  fetch("https://apiexample.website/contacts/add", {
    "method": "POST",
    "headers": {
      "api": "clement",
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    "body": JSON.stringify(this.state)
  })
  .then(response => response.json() )
  .then((data) => this.setState({contacts: data.contacts}) )
  .catch(err => {
    console.log(err);
  });

  }
    render() {
        return(
            <form onSubmit={this.props.addcontact}>
                <label>Name: </label>
                <input type="text" name="contactName" id="newContactName" />
                <br />
                <label>Number: </label>
                <input type="text" name="contactNumber" id="newContactNumber" />
                <br />
                <button type="submit">Add Contact</button>
                <button type="reset">Reset</button>
            </form>
        );
    }

}

export default Newcontact;
