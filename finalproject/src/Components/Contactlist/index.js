import React from 'react';
import Contact from "../Contact/";
import Deletecontact from "../Deletecontact/";

class Contactlist extends React.Component {
  constructor(props){
    super(props);
    this.state = {contacts: {}};
  }
  componentDidMount(){
  fetch("https://apiexample.website/contacts", {
  "method": "GET",
  "headers": {
    "api": "clement"
  },
  })
  .then((response) => {
      return response.json();
  })
  .then((data) => {
      this.setState({ contacts: data}
      )
  })
  .catch(() => console.log("Errors!"))
}
  render(){
    return(
      <div>
          {this.state.contact.map((contact, index) => {
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
