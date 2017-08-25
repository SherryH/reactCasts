import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ContactsApp from './components/ContactsApp';

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
        <ContactsApp contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
