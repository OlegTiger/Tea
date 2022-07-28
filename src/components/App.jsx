import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import Map from './Map';
import Login from './Login';

export default function App() {
  const [authUser, setAuthUser] = useState({});
  return (
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login authUser={authUser} setAuthUser={setAuthUser} />} />
        <Route path="/" element={<Header />} />
        <Route path="/" element={<Map />} />
        <Route path="/" element={<Footer />} />
      </Routes>
    </div>
  );
}
