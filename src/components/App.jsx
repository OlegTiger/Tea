import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';

import Login from './Login';
import Home from './Home';
import SingleTeaPage from './SingleTeaPage';
import Footer from './Footer';

export default function App({allTea, teaPost}) {

  const [authUser, setAuthUser] = useState({});
  const [allTea2, setAllTea2] = useState(allTea)

  return (
    <>
    <div className="container">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home allTea={allTea2}/>} />
        <Route path="/login" element={<Login authUser={authUser} setAuthUser={setAuthUser} />} />
        <Route path="/tea/:id" element={<SingleTeaPage teaPost={teaPost}/>} />
      </Routes>
      <Footer />
    </div>
    </>
  );
}
