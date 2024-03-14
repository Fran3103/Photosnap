
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Stories from './Components/Stories'
import Features from './Components/Features'
import { Pricing } from './Components/Pricing'


function App() {


  return (
    <>
    <Navbar/>
    
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stories' element={<Stories/>} />
        <Route path='/features' element={<Features/>} />
        <Route path='/pricing' element={<Pricing/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
