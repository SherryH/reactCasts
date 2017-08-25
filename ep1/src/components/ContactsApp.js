import React, { Component, PropTypes } from 'react';
import '../App.css';

class ContactsApp extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf({
      name: PropTypes.string,
      email: PropTypes.string,
      picture: PropTypes.string
    }).isRequired
  };

  render() {
    return (
      <div>
        <input type="search" placeholder="search" />
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
