import React from 'react'
import '../styles/JokeRender.css'

const JokeRender = ({joke}) => {
  return (
    <div className='JokeRender'>
      <p id='joke'>{joke}</p>
    </div>
  )
}

export default JokeRender
