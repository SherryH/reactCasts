import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    contacts: []
  };
  componentDidMount() {
    fetch('https://api.randomuser.me/?nat=us,gb&results=3')
      .then(response => {
        return response.json();
      })
      .then(parsedRes => {
        return parsedRes.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          picture: user.picture.thumbnail
        }));
      })
      .then(contacts => {
        this.setState({
          contacts
        });
      });
  }
  render() {
    return (
      <div className="appContainer">
        <input type="search" placeholder="search" />
        <div>
          <ul>
            <li>
              <img src="#" role="presentation" />
              <div>
                <strong>name</strong>
                <br />
                <strong>email</strong>
              </div>
            </li>
            {this.state.contacts.map(contact =>
              <li>
                <img src={contact.picture} role="presentation" />
                <div>
                  <strong>
                    {contact.name}
                  </strong>
                  <br />
                  <strong>
                    {contact.email}
                  </strong>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
