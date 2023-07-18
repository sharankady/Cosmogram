import React from 'react'
import Card from './Card'
import './CardItems.css'

export default function CardItems({image,title,explanation,date,copyright}) {

  return (
    <div className='carditems'>
        <Card 
        image={image}
        title={title}
        explanation ={explanation}
        date={date}
        copyright={copyright}
        

        />
    </div>
  )
}
