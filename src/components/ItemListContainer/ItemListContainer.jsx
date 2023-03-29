import React from 'react'
import './ItemListContainer.css'

const ItemListContainer = (propiedad) => {
  return (
    <h2 className='subtitulo'> {propiedad.greeting} </h2>
  )
}

export default ItemListContainer