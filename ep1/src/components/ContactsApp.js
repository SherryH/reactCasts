import React, { Component, PropTypes } from 'react';
import '../App.css';
import SearchBar from './SearchBar';
import ContactList from './ContactList';
import LoadingHOC from './HOC/LoadingHOC';

class ContactsApp extends Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object),
    loadingTime: PropTypes.string
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
        <p>
          The loading time is {this.props.loadingTime}
        </p>
      </div>
    );
  }
}

export default LoadingHOC('contacts')(ContactsApp);
