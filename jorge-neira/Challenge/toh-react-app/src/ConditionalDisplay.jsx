import React, {useState} from 'react'
import NavBar from './components/navigationComponent/navigationHero'

export default function ConditionalDisplay(props) {
  const [isVisible, setIsVisible] = useState(props.isVisible)
  return (
    <div>
      <p>
        {isVisible ? props.children : React.createElement('div', null, [<NavBar />, React.createElement('h1', null, 'SIEMPREEE SIEMPREE UNDEFINED')])}
        
      </p>
      <button onClick={() => {
        setIsVisible(!isVisible)
      }}>
        Toogle Display
      </button>
    </div>
  )
}

