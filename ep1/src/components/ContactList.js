import React, { Component, PropTypes } from 'react';

//filter the contacts according to the input
const filteredContacts = (contacts, filterText) => {
  return contacts.filter(contact => contact.name.includes(filterText));
};

const ContactList = ({ contacts, filterText }) =>
  <ul>
    {filteredContacts(contacts, filterText).map(contact =>
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
  </ul>;

export default ContactList;
