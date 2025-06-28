import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <BrowserRouter>
   
      <Routes>
        <Route path='/' element={<Homepage/>} />
      </Routes>
     
    </BrowserRouter>
    </>
  )
}

export default App
