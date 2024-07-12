import React from 'react'
import './NewsLetter.css'

export const NewsLetter = () => {
  return (
    <div className ='newsletter'>
      <h1>Get Exclusive Effers On Your Email</h1>
      <p>Subscribe To Your Newsletter And Stay Update</p>
      <div>
        <input type="email" placeholder='Your Email id'/>
        <button>Subscribe</button>
      </div>
    </div>
  )
}
