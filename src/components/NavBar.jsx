import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ logoutHandler, user }) {
  return (
    <nav className="nawnaw navbar navbar-expand-lg bg-light">
      <div className="container-fluid baseline ">
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
        <ul className="ulspace">
          {user.username ? (
            <>
              <li className="nav-item nomarker greeting">
                <span className="nav-link">Привет, {user.username}!</span>
              </li>
              <Link className="lispace nav-link" to="/admin">
                Личный кабинет
              </Link>
              <li className="nav-item nomarker ">
                <button className="logout" onClick={logoutHandler}>
                  Выход
                </button>
              </li>
            </>
          )
            : (
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
              </div>
            </div>
          )}
        </ul>
      </div>
    </nav>
  );
}
