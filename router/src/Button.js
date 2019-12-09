import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Button() {
  return (
    <div className="links">
    <ul className="link">
      <Link to="/admin">
        <li className="button">ADMIN / OFFICER LOGIN</li>
      </Link>
      <Link to="/user">
        <li className="button">USER LOGIN / REGISTRATION</li>
      </Link>
    </ul>
    </div>
  );
}

export default Button;