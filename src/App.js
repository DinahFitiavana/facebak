import React from 'react';
import './App.css';
<<<<<<< HEAD
import { Header } from './main/header.jsx';
import { NavBar } from './main/nav-bar';
import { Post } from './modules/post/post';
import "./main/main.css";
import { Profil } from './modules/profil/profil.jsx';
import { SignUp } from './modules/signup/sign-up';

function App() {
  return (
    <>
      <Header />
        <main>
          {/*<NavBar />*/}
          {/*<Post />*/}
          {/* <Profil/> */}
          <SignUp/>
        </main>
    </>
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login } from './modules/login-singin/login.jsx';
import { Home } from './modules/Home/home.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home/*" element={<Home />} />
      </Routes>
    </BrowserRouter>
>>>>>>> eaa2b64551d22eaaaddc5a209d2ab02d2cf4e2ea
  );
}

export default App;
