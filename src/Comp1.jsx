import React, { useRef } from 'react'

const Comp1 = () => {
  const element = useRef()

  const onButtonClick = ()=>{
    // element.style ={background: "blue"};
    element.current.focus();
  }
  return (
    <div>
      <input type="text" ref={element}/>
      <button onClick={onButtonClick}>Click me</button>
    </div>
  )
}

export default Comp1
