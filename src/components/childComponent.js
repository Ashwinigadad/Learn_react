import React from 'react'

function childComponent(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('Child')}>greet</button>
    </div>
  )
}

export default childComponent
