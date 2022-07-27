import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import Header from './Header';
import Map from './Map';
import Login from './Login';

export default function App() {
  return (
    <div className="container">
      <NavBar />
      <Login />
      <Header />
      <Map />
      <Footer />
    </div>
  );
}
