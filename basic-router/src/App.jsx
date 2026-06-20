import reacr from "react"
import { Routes, Route } from "react-router-dom" 
import Home from './pages/Home'
import About from './pages/About'
import Nav from './component/Nav'
function App() {


  return (
    <>
    <Nav />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/About' element={<About />} />
    </Routes>
    </>
  )
}

export default App
