import React from "react";
class CreateAccount extends React.Component {
  register = (event) => {
    event.preventDefault();
    let username = document.querySelector("input[type='text']");
    let password = document.querySelector("input[type='password']");
    console.log(username.value, password.value);
  }
  render(){
    return(
      <div>
        <form method="POST" onSubmit={this.register}>
        <input type="text" name="username"/>
        <input type="password" name="password"/>
        <button type="submit">Submit</button>
        </form>
        </div>
    )
  }
}
export default CreateAccount;
