import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
//import Projects from './Projects'
//import Contact from './Contact'   

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  )
}