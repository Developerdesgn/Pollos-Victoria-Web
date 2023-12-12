import React from 'react'

function Text({ text, color,font }) {
   
return (
    <div className='textStyle' style={{color:color,fontSize:font}} >{text}</div>
)
}

export default Text