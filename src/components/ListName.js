import React from 'react'

function ListName() {
    const names=['A','B','C','D']
  return (
    <div>
      {
        names.map(name=><h2>{name}</h2>)

      }
        
      
    </div>
  )
}

export default ListName
