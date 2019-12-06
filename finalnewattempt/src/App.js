import React from 'react';
import './App.css';
import Profile from "./Components/Profile";
import Contactlist from "./Components/Contactlist";

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
      </div>;

    }
    if(this.state.menu === 1) {

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
