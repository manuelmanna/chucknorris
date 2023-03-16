import React from 'react'
import '../styles/Buttons.css'
const Buttons = ({text, variant, clbk}) => {

  function renderClasses(){
    let classes = [
      'buttons', variant
    ]

    return classes.join(" ")
  }

  return (
    <div>
      <button className={renderClasses()} onClick={clbk}>{text}</button>
    </div>
  )
}

export default Buttons
