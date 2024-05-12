import React from 'react'

export default function Child({handleClick}) {
  return (
    <>
    <div>Child</div>
    <button onClick = {handleClick}>Click to update count</button>
    </>
  )
}
