import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Meow } from './components/Meow'
import { House, Hash, Bell, Envelope, BookmarkSimple, FileText, User, DotsThreeCircle, Sparkle } from 'phosphor-react'

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
        <main className='timeline'>
          <div className='timeline-header'>
            Home
            <Sparkle />
          </div>
          <form className='new-meow-form'>
            <label htmlFor="meow">
              <img src="https://github.com/matheuscs.png" alt="Fiorela" />
              <textarea name="" id="meow" placeholder="Meow's happening?"></textarea>
            </label>
            <button type='submit'>Meow</button>
          </form>
          <div className='separator'></div>
          <Meow />
          <Meow></Meow>
          <Meow></Meow>
          <Meow></Meow>
        </main>
      </div>
    </div>
  </StrictMode>
)
