import React from 'react'

const Button: React.FC<{color:string, text:string, onClick:any}> =({color, text, onClick})=> {
   
  return (
    <button onClick={onClick} style={{backgroundColor: color}} className='btn'>
       {text}
        </button>
  )
}

export default Button