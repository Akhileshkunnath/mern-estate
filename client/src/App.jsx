import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SingUp from './pages/SingUp';
import About from './pages/About';
import Profile from './pages/Profile';
import Header from './components/Header';
const App = () => {
  return <BrowserRouter>
  <Header/>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/sign-in' element={<SignIn/>}/>
    <Route path='/sign-up' element={<SingUp/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/profile' element={<Profile/>}/>
  </Routes>
  </BrowserRouter>
    
  
}

export default App