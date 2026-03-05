import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
//import Projects from './Projects' <Route path="/projects" element={<Projects />} />
//import Contact from './Contact'   <Route path="/contact" element={<Contact />} />

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  )
}