import './Formstyle.css'
import React from 'react'

export default function Form() {
  return (
    <div>
        <div className='form'>
            <label><h4>Name</h4></label>
            <input></input>
            <label><h4>Number</h4></label>
            <input></input>
            <label><h4>Message</h4></label>
            <input></input>
            <br/>
            <button className='submit'><h4>Submit</h4></button>
            
        </div>
        
      
    </div>
  )
}
