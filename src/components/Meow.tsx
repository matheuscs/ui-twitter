import './Meow.css'
import { ChatCircle, ArrowsClockwise, Heart } from 'phosphor-react'

export function Meow() {
    return (
        <a href='#' className="meow">
           <img src="https://github.com/matheuscs.png" alt="Fiorela" /> 
           <div className='meow-content'>
            <div className='meow-content-header'>
                <strong>Fiorela Jane</strong>
                <span>@fiorela</span>
            </div>
            <p>
            Just joined Meow! 🐾 #FirstMeow <br />
            Meowwwww
            </p>
            <div className="meow-content-footer">
                <button type='button'>
                    <ChatCircle /> 1
                </button>
                <button>
                    <ArrowsClockwise /> 0
                </button>
                <button>
                    <Heart /> 3
                </button>
              </div>
           </div>
        </a>
    )
}