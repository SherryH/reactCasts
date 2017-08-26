import React, { Component, PropTypes } from 'react';

const SearchBar = ({ filterText, onUserChange }) =>
  <input
    type="search"
    placeholder="search"
    value={filterText}
    onChange={e => {
      onUserChange(e.target.value);
    }}
  />;

SearchBar.PropTypes = {
  filterText: PropTypes.string.isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default SearchBar;
