import React, { useState } from 'react'
import './Card.css'
import Modal from './Modal'
export default function Card({image,title,explanation,date,copyright}) {

  const [openModal,setOpenModal] =useState(false)

  return (
    <>
       <div className="card ">
        <div className="card-content" style={{width: '10rem'}}>
  <img src={image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <p className="card-title"><b>{title}</b></p>
    <button onClick={() =>setOpenModal(true)} className="btn btn-info">Details</button>
    </div>
  
        </div>
    </div>
    <Modal open={openModal} 
       title={title} 
       image={image} 
       explanation={explanation}
       date={date}
       copyright={copyright}
       onClose={()=>setOpenModal(false)}
       
    />

    </>
  )
}
