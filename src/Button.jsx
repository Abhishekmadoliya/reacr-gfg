

import React from 'react'

const Button = (props) => {
  return (
    <>
      <button style={{backgroundColor: props.bgcolor}}>{props.name} </button>
    </>
  )
}

export default Button
