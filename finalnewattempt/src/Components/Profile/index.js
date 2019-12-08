import React from 'react';
import "./index.css";

class Profile extends React.Component{
  constructor(props) {
        super(props);
        this.state = { profile: {}};
    }

    componentDidMount() {
      fetch("https://apiexample.website/profile", {
        "method": "GET",
        "headers": {
          "api": "clement"
        }
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            this.setState({ profile: data}
            )
        })
        .catch(() => console.log("Errors!"))
    }
    render() {
        return(
            <div className="profile">
              <h3>Welcome back {this.state.profile.name}!</h3>
              <p>You currently have {this.state.profile.count} contacts.</p>
              <button className="button" onClick={(event) => {this.props.changemenu(event, 0)} }>Return</button>
            </div>
        );
    }
}
export default Profile;
