import React, { Component, PropTypes } from 'react';
import '../App.css';
import SearchBar from './SearchBar';

class ContactsApp extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf({
      name: PropTypes.string,
      email: PropTypes.string,
      picture: PropTypes.string
    }).isRequired
  };

  state = {
    filterText: ''
  };

  getUserInput = input => {
    this.setState({
      filterText: input
    });
  };

  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          onUserChange={this.getUserInput}
        />
        <ul>
          {this.props.contacts.map(contact =>
            <li>
              <img src={contact.picture} role="presentation" />
              <div>
                <strong>
                  {contact.name}
                </strong>
                <br />
                <div>
                  {contact.email}
                </div>
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ContactsApp;
