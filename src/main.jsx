import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DemoVideoPage from './DemoVideoPage.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DemoVideoPage />
  </StrictMode>,
)
