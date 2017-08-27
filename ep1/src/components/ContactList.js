import React, { Component, PropTypes } from 'react';

//filter the contacts according to the input
const filteredContacts = (contacts, filterText) => {
  return contacts
    ? contacts.filter(contact => contact.name.includes(filterText))
    : [];
};

const ContactList = ({ contacts, filterText }) =>
  <ul>
    {filteredContacts(contacts, filterText).map(contact =>
      <li key={contact.email}>
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

ContactList.prototype = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filterText: PropTypes.string
};
export default ContactList;
