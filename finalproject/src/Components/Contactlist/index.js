import React from 'react';
import Contact from "../Contact/";

class Contactlist extends React.Component {
  constructor(props){
    super(props);
    this.state={
      contacts: []
    };
}
  remove = (event) => {

    let dataname = event.target.getAttribute("dataname");

    let localContacts = this.state.contact;

    let changedContacts = localContacts.filter((contact) => {
      return contact.name !== dataname;
    });

    this.setState({contacts: changedContacts});
  }

  componentDidMount(){
  fetch("https://apiexample.website/contacts", {
  "method": "GET",
  "headers": {"api": "clement"},
  })
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      this.setState({
        contacts: data.contacts}
      )
  })
  .catch(() => console.log("Errors!"))
}
  render(){
    return(
      <div>
          {
            this.state.contacts.map((contact, index) => {
                return <Contact
                    key={index}
                    name={contact.name}
                    number={contact.number}
                    dataclick={this.remove} />
            })
          }
          <button className="button" onClick={(event) => {this.props.changemenu(event, 0)} }>Return</button>
      </div>
    );
  }
}
export default Contactlist;
