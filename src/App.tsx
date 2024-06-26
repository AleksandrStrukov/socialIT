import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {ProfileComponent} from './components/ProfileComponent/ProfileComponent';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <ProfileComponent />
    </div>
  );
}

export default App;
