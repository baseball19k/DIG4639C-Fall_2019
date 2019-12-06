import React from "react";
import Contact from "../Contact/";
import Newcontact from "../Newcontact/";

class Contactlist extends React.Component {

  constructor(props) {

    super(props);

    this.state = {contacts: {}};

  }

  removecontact = (event) => {

    // Get the 'datatitle' attribute
    let dataname = event.target.getAttribute("dataname");

    // Make a local copy of cards
    let localContacts = this.state.contacts;

    // Filter against the 'datatitle' name
    let changedContacts = localContacts.filter((contacts) => {
      return contacts.name !== dataname;
    });

    // Update state
    this.setState({contacts: changedContacts});

  }
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
  addcontact = (event) => {


    // Prevent the normal page refresh
    event.preventDefault();

    // Get the title and content elements
    let nameElement = document.getElementById("newContactName");
    let numberElement = document.getElementById("newContactNumber");

    if(nameElement.value.length !== 0
      && numberElement.value.length !== 0) {

      // Create a new dog card
      let newcontact = {
        name: nameElement.value,
        number: numberElement.value
      };

      // Reset the element values
      nameElement.value = "";
      numberElement.value = "";

      // Create local copy
      let localContacts = this.state.contacts;

      // Change local copy
      localContacts.push(newcontact);

      // Update state with changed, local copy
      this.setState({contacts: localContacts});

    }


  }

  render() {
    return(
      <div>
          <Newcontact addcontact={this.addcontact} />
          {
              this.state.cards.map((contacts, index) => {
                return <Contact
                    key={index}
                    name={contacts.name}
                    number={contacts.number}
                    removecontact={this.removecontact}
                    />
            })
          }
          <button className="button" onClick={(event) => {this.props.changemenu(event, 0)} }>Return</button>
          </div>


    );
  }


}

export default Contactlist;
