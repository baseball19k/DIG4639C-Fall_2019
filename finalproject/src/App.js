import React from 'react';
import Addcontact from "./Components/Addcontact";
import Contactlist from "./Components/Contactlist";
import Deletecontact from "./Components/Deletecontact";
import Profile from "./Components/Profile";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {menu: 0};

  }

  changeMenu = (event, menu) => {

    event.preventDefault();

    this.setState({menu: menu});

  }

  showMenu() {

    let menu = "";

    if(this.state.menu === 0) {

      menu = <div>
        <h1>Welcome to your Phonebook!</h1>
        <br />
        <button className="button" onClick={(event) => {this.changeMenu(event, 1)} }>Show Contacts</button><br />
        <button className="button" onClick={(event) => {this.changeMenu(event, 2)} }>Profile</button><br />
        <button className="button" onClick={(event) => {this.changeMenu(event, 3)} }>Add Contacts</button><br />
      </div>;

    }
    if(this.state.menu === 3) {

      menu = <Addcontact changemenu={this.changeMenu} />;

    }if(this.state.menu === 1) {

      menu = <Contactlist changemenu={this.changeMenu} />;

    }if(this.state.menu === 2) {

      menu = <Profile changemenu={this.changeMenu} />;

    }

    return menu;

  }

  render() {
    return (
      <div>
        {this.showMenu()}
      </div>
    );
  }

}

export default App;
