import axios from 'axios';
import React, { useState } from 'react';
import NavBar from './NavBar';
import PrivateRoutes from './reactRouting/PrivateRoutes';
import PublicRoutes from './reactRouting/PublicRoutes';


export default function App({ usernameSession }) {
  const [authUser, setAuthUser] = useState(usernameSession);
  const logoutHandler = () => {
    setAuthUser({}); // Чиним logout -> setAuthUser({})
    axios.get('/api/v1/logout').then(() => {});
  };
  return (
    <div className="container">
      <NavBar logoutHandler={logoutHandler}/>
      {authUser?.name ? <PrivateRoutes authUser={authUser} setAuthUser={setAuthUser} />
        : <PublicRoutes authUser={authUser} setAuthUser={setAuthUser} />}
    </div>
  );
}
