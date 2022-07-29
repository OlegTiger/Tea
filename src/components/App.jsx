import axios from 'axios';
import { Route, Routes } from 'react-router-dom';
import React, { useState } from 'react';
import NavBar from './NavBar';
import PrivateRoutes from './reactRouting/PrivateRoutes';
import PublicRoutes from './reactRouting/PublicRoutes';
import Footer from './Footer';
import Home from './Home';

export default function App({ usernameSession, allTea, teaPost }) {
  const [allTea2, setAllTea2] = useState(allTea);
  const [authUser, setAuthUser] = useState(usernameSession);
  console.log('NEW AUTH:', authUser);
  const logoutHandler = () => {
    setAuthUser({}); // Чиним logout -> setAuthUser({})
    axios.get('/api/v1/logout').then(() => {});
  };

  return (
    <div className="container">
      <NavBar logoutHandler={logoutHandler} />
      <Routes>
        <Route path="/" element={<Home allTea={allTea} teaPost={teaPost} />} />
      </Routes>
      {authUser?.username ? (
        <PrivateRoutes
          authUser={authUser}
          allTea={allTea2}
          teaPost={teaPost}
          setAuthUser={setAuthUser}
        />
      ) : (
        <PublicRoutes authUser={authUser} setAuthUser={setAuthUser} />
      )}

      <Footer />
    </div>
  );
}
