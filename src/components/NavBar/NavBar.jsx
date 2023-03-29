import React from 'react'
import './NavBar.css'
import CardWidget from '../CardWidget/CardWidget'

const NavBAr = () => {
  return (
    <header>
        <h1>Consvision Shop</h1>

        <nav>
            <ul>
                <li style={{ fontWeight: 'bold' }}>Arduino</li>
                <li style={{ fontWeight: 'bold' }}>PC</li>
                <li style={{ fontWeight: 'bold' }}>Perifericos</li>
                <li style={{ fontWeight: 'bold' }}>Audio</li>
            </ul>
        </nav>
        
        <CardWidget/>

    </header>
  )
}

export default NavBAr