import React from 'react'

export default function Sum({a, b, showAlert}) {
  return (
    <>
    {a} + {b} = {''} 
    <button onClick={() => showAlert(a, b)}> ? </button>
    </>
  )
}

