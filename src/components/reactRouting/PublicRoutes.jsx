import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login';

export default function PublicRoutes({ authUser, setAuthUser }) {
  return (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/login" element={<Login authUser={authUser} setAuthUser={setAuthUser} />} />
    </Routes>
  );
}
