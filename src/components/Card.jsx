import React from 'react'
import { mount } from '../assets'

const Card = (props) => {
  return (
    <div className='flex pt-[60px]'>
        <div>
            <img src={props.img} alt="mount" className='static w-[220px] ml-[60px]'/>
        </div>
        <div className='pl-8 pt-5'>
            <div className='flex justify-around'>
                <h1 className='font-light'>{props.location}</h1>
                <p className='text-gray-400 '>{props.link}</p>
            </div>
            <div>
                <h1 className='font-bold text-4xl pt-2'>{props.title}</h1>
                <p className='font-semibold font-sans mt-5 '>{props.date}</p>
                <p className='w-[450px] tracking-widest mt-4'>{props.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Card