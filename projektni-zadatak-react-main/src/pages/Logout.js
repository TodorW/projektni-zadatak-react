import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

import './Logout.css'

const Header = () => {
  const { logout } = useContext(AuthContext);

  return (
    <header>
      <h1>LOGOUT</h1>
      <br></br>
      <p id='areyousure'>Are you sure?</p>
      <br></br>
      <button onClick={logout}>Yes</button>
    </header>
  );
};

export default Header;
