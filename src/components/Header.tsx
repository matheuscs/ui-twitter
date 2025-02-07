import { Sparkle } from 'phosphor-react'
import './Header.css'

export function Header(props: {title: string}) {
  return (
    <div className='timeline-header'>
    {props.title}
    <Sparkle />
  </div>
  )
}