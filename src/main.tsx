import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Meow } from './components/Meow'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='layout'>
      <Sidebar />
      <div className="content">
        <main className='timeline'>
          <Header title='Home'/>
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
