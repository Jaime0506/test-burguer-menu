import React, { useEffect, useState } from 'react'
import { bubble as Menu } from 'react-burger-menu'

import './App.css'
export default function App() {

  const [windowHeight, setWindowHeight] = useState({})
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const height =  window.innerHeight

    setWindowHeight({
      height
    })
  }, [])

  const toggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <Menu 
        right
        customBurgerIcon={false}
        isOpen={isOpen}
        onOpen={ toggle }
        onClose={ toggle }
      > 
        <div className='items-menu'>
          <h1>Hola</h1>
          <h1>Mi Gente</h1>
          <h1>Linda</h1>
          <h1>De Jaime</h1>
        </div>
        
      </Menu>

      <div className='app' style={windowHeight}>
        <button onClick={ toggle }>Abrir Menu</button>
      </div>
    </>
    
  )
}

