import { Link } from 'react-router-dom'
import './Meow.css'
import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'

interface MeowProps {
  content: string,
  comments: number,
  remeows: number,
  pawsup: number
}

export function Meow(props: MeowProps) {
  return (
    <Link to='/meow' className="meow">
      <img src="https://github.com/matheuscs.png" alt="Fiorela" /> 
      <div className='meow-content'>
        <div className='meow-content-header'>
          <strong>Fiorela Jane</strong>
          <span>@fiorela</span>
        </div>
        <p>{props.content}</p>
        <div className="meow-content-footer">
          <button className='regular'>
            <ChatCircle /> {props.comments}
          </button>
          <button className='regular'>
            <ArrowsClockwise /> {props.remeows}
          </button>
          <button className='btnhearts'>
            <Heart className='hearts'/> {props.pawsup}
          </button>
        </div>
      </div>
    </Link>
  )
}
