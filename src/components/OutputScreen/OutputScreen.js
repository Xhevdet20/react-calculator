import React from 'react'
import './OutputScreen.css'; 

export default function OutputScreen({expression, result}) {

  return (
    <div className='screen'>
      <h2>{expression}</h2>
      <h1>{result}</h1>
    </div>
  )
}
