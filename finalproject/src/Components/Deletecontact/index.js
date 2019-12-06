import React from 'react';

class Deletecontact extends React.Component {
    remove = (event) => {

      let datatitle = event.target.getAttribute("datatitle");

      let localcontacts = this.state.contacts;

      let changedcontacts = localcontacts.filter((contacts) => {
        return contacts.title !== datatitle;
      });

      this.setState({contacts: changedcontacts});

    }
  }
export default Deletecontact;
