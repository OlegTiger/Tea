import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

import Login from './Login';
import Home from './Home';
import SingleTeaPage from './SingleTeaPage';

export default function App({allTea}) {

  const [authUser, setAuthUser] = useState({});
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home allTea={allTea}/>} />
        <Route path="/login" element={<Login authUser={authUser} setAuthUser={setAuthUser} />} />
      </Routes>
      <SingleTeaPage />
    </div>
  );
}
