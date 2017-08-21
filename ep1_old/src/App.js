import React from 'react';
import styles from './App.css';

const App = () =>
  <div className={styles.appContainer}>
    <input type="search" placeholder="search" />
    <ul>
      <li>
        <img src="#" role="presentation" />
        <div>
          <strong>name</strong>
          <br />
          <strong>email</strong>
        </div>
      </li>
    </ul>
  </div>;

export default App;
