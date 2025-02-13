import React from 'react'

const IncrementButton = ({onClick}) => {
  return (
    <div>
        <button onClick={onClick}>Increment</button>
    </div>
  )
}

export default IncrementButton