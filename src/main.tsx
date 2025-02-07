import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Meow } from './components/Meow'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import './global.css'

const meows = [
  {id: 1, content: 'Just joined Meow! 🐾 #FirstMeow', comments: 0, remeows: 0, pawsup: 2},
  {id: 2, content: 'Testing… testing… 1, 2, Meow! Is this thing on? 🎤🐾', comments: 0, remeows: 0, pawsup: 1},
  {id: 3, content: 'Why do hoomans always wake up when I step on their face at 3AM? Just curious.', comments: 1, remeows: 1, pawsup: 3}
]

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
          {meows.map(m => {
              return <Meow key={m.id} content={m.content} comments={m.comments} remeows={m.remeows} pawsup={m.pawsup}/>
          })}
        </main>
      </div>
    </div>
  </StrictMode>
)
