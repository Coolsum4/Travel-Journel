import React from 'react'
import Card from './Card'
import data from './data'


const Hero = () => {
    const cards = data.map( items =>{
      return(  <Card
        img = {items.coverImg}
        location ={items.location}
        link = {items.link}
        title = {items.title}
        date = {items.date}
        description = {items.description}  />
     ) })
  return (
    <div>
        {cards}
        
    </div>
  )
}

export default Hero