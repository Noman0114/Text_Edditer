import React from 'react'
import './button.css'
export default function Button(props) {
  return (
    <button onClick={props.onClick} className='btn btn-success mx-3'>
{props.name}
    </button>
  )
}
