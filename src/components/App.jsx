import axios from 'axios';
import React, { useState } from 'react';
import NavBar from './NavBar';
import PrivateRoutes from './reactRouting/PrivateRoutes';
import PublicRoutes from './reactRouting/PublicRoutes';
import Login from './Login';
import Home from './Home';
import SingleTeaPage from './SingleTeaPage';
import Footer from './Footer';


export default function App({ usernameSession }) {
  const [authUser, setAuthUser] = useState(usernameSession);
  const logoutHandler = () => {
    setAuthUser({}); // Чиним logout -> setAuthUser({})
    axios.get('/api/v1/logout').then(() => {});
  };
  

export default function App({allTea, teaPost}) {

  const [authUser, setAuthUser] = useState({});
  const [allTea2, setAllTea2] = useState(allTea)



  return (
    <>
    <div className="container">
      <NavBar logoutHandler={logoutHandler}/>
      {authUser?.name ? <PrivateRoutes authUser={authUser} setAuthUser={setAuthUser} />
        : <PublicRoutes authUser={authUser} setAuthUser={setAuthUser} />}


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
