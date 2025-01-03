import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home/Home.jsx'
import AboutMe from './components/information/AboutMe.jsx'
import Projects from './components/projects/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <AboutMe />
    <Projects />
  </StrictMode>,
)
