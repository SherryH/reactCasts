import React, { Component, PropTypes } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import LoadingHOC from './HOC/LoadingHOC';

class ContactsApp extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object)
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
        <ContactList
          contacts={this.props.contacts}
          filterText={this.state.filterText}
        />
      </div>
    );
  }
}

export default LoadingHOC('contacts')(ContactsApp);
