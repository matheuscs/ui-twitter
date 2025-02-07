import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle } from 'phosphor-react'

import './global.css'
import catterLogo from './assets/logo.svg'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <aside className="sidebar">
        <img className='logo' src={catterLogo} alt="Logo" />
        <nav className='main-navigation'>
          <a href="" className='active'><House weight='fill' />Home</a>
          <a href=""><Hash />Explore</a>
          <a href=""><Bell />Notifications</a>
          <a href=""><Envelope /> Messages</a>
          <a href=""><BookmarkSimple /> Bookmarks</a>
          <a href=""><FileText /> List</a>
          <a href=""><User />Profile</a>
          <a href=""><DotsThreeCircle />More</a>
        </nav>
        <button className='new-meow' type='button'>Meow</button>
      </aside>
      <div className="content">
        meowwwwwww
      </div>
    </div>
  </StrictMode>
)
