import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Navbar} from './components/Navbar';
import {ProfileComponent} from './components/ProfileComponent';

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
