import React from "react";

class Newcontact extends React.Component {

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
