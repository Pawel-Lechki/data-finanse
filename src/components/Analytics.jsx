import React from 'react'
import Laptop from '../assets/laptop.jpg'

export const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img src={Laptop} alt="/" className='w-[500px] mx-auto my-4'/>
            <div className='flex flex-col justify-center'>
                <p className='uppercase text-[#00df9a] font-bold'>Data Analytics Dshboard</p>
                <h1 className='md:text-4xl sm:text-3xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, ullam. Cupiditate aspernatur ipsam ab ipsum odio commodi, dolor soluta nesciunt consequuntur, quae, tempora officia recusandae minus possimus eum perspiciatis necessitatibus?</p>
                <button className='bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]'>Get Started</button>
            </div>
        </div>
    </div>
  )
}
