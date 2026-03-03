import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestSite from './TestSite.jsx'

// Generate random 10 digit number
function getRandomId(){
  return Math.floor(Math.random() * 10000000000)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TestSite id={getRandomId()}/>
  </StrictMode>,
)
