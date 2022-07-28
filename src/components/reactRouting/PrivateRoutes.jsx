import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import Login from '../Login';
import SingleTeaPage from '../SingleTeaPage';

export default function PrivateRoutes({
  authUser, setAuthUser, allTea, teaPost,
}) {
  return (
    <Routes>
      {/* <Route path="/" element={<Home allTea={allTea} teaPost={teaPost} />} /> */}
      <Route path="/login" element={<Login authUser={authUser} setAuthUser={setAuthUser} />} />
      <Route path="/tea/:id" element={<SingleTeaPage teaPost={teaPost} />} />
    </Routes>
  );
}
