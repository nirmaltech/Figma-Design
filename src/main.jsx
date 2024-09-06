import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Tab from './Tab.jsx'
import Figma from './Figma.jsx'





createRoot(document.getElementById('root')).render(
  <StrictMode>

      <Tab/>
      <Figma/>
    
  
    
  </StrictMode>,
)
