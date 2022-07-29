import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ logoutHandler }) {
  return (
    <nav className="nawnaw navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/posts">
              LK
            </Link>{' '}
            {/* // появляется при авторизации пользователя */}
            <Link className="nav-link" to="/login">
              Login
            </Link>
            <button
              type="button"
              className="logout nav-link"
              onClick={logoutHandler}
            >
              LogOut
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
