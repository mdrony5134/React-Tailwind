 
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header/Header'
import About from './pages/About';
import Skill from './pages/Skill';
import Project from './pages/Project';
import LoginPage from './pages/LoginPage';
import SingUp from './pages/SingUp';

function App() {
   

  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/skill' element={<Skill/>}/>
          <Route path='/project' element={<Project/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/singup' element={<SingUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
