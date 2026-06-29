import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import souvik from './souvik.jsx'
import Souvik from './souvik.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Souvik />
  </StrictMode>,
)
