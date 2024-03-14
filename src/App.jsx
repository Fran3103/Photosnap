
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Footer from './Components/Footer'
import Stories from './Components/Stories'


function App() {


  return (
    <>
    <Navbar/>
    
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/stories' element={<Stories/>} />
     </Routes>
     <Footer/>
    </>
  )
}

export default App
