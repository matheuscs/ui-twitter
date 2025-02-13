import { Header } from '../components/Header'
import { Meow } from '../components/Meow'

import './OpenMeow.css'

const meow = {content: 'Why do hoomans always wake up when I step on their face at 3AM? Just curious.', comments: 1, remeows: 1, pawsup: 3}

const comments = [
  {id: 1, name: "Tobias", user: 'tobias', content: "It's a mystery... but I must continue my research. 😼🔬", comments: 0, remeows: 0, pawsup: 0}
]

export function OpenMeow() {
  return(
    <main className="openmeow">
      <Header title='Meow'/>
      <Meow content={meow.content} comments={meow.comments} remeows={meow.remeows} pawsup={meow.pawsup}/>
      <div className='separator'></div>
      <form action="" className="answer-meow-form">
        <label htmlFor="meow">
          <img src="https://github.com/matheuscs.png" alt="Fiorela" />
          <textarea name="" id="meow" placeholder='Meow your answer'></textarea>
        </label>
        <button type='submit'>Meow</button>
      </form>
      {comments.map(c => {
        return <Meow key={c.id} content={c.content} comments={c.comments} remeows={c.remeows} pawsup={c.pawsup} />
      })}
    </main>
  )
}