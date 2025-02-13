import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Sidebar } from './components/Sidebar'
import { Timeline } from './pages/Timeline'

import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <Sidebar />
      <div className="content">
      <Timeline />
      </div>
    </div>
  </StrictMode>
)
