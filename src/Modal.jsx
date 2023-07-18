import React from 'react'
import './Modal.css'

export default function Modal({open,title,image,explanation,date,copyright,onClose}) {
    if(!open) return null
  return (
    <div className="overlay">
        <div className="modalContainer">
            <img src={image} alt=''/>
            <h4>{title}</h4>
            <div className='content'>
                <p>{explanation}</p>
                <p>Date Published: {date}</p>
                <p>Copyright:{!copyright? " None":` ${copyright}`}</p>
            </div>
            <button onClick={onClose} className='closeBtn'>X</button>
            </div>    
        </div>


  )
}
