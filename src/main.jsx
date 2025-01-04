import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home/Home.jsx'
import AboutMe from './components/information/AboutMe.jsx'
import Projects from './components/projects/Projects.jsx'
import Habilities from './components/projects/Habilities.jsx'
import Contact from './components/contact/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home />
    <AboutMe />
    <Habilities />
    <Projects />
    <Contact />
  </StrictMode>,
)
