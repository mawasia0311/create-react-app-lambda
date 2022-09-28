import React from 'react'

function Item(props) {
  return (
    <div className='item'>
      <button onClick={()=>{
        props.onSelect(props.id);
      }}>x</button>
      <p>{props.value}</p>
    </div>
  )
}

export default Item
