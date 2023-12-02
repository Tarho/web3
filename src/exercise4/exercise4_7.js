import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class UserForm extends Component {
  display = () => {
    const username = document.getElementById("name");
    const pw = document.getElementById("pw");
    console.log("Username: " + username.value);
    console.log("Password: " + pw.value);
  }

  render() {
    return (
      <form>
        <label>Enter a username: </label>
        <input id='name' style={{marginRight: "10px"}}/>
        <label>Enter a password: </label>
        <input type="password" id='pw' style={{marginRight: "10px"}}/>
        <button type="button" onClick={this.display}>Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<UserForm />, document.getElementById('root'));

export default UserForm;
