import React from 'react'
import borabora from '../assets/borabora.jpg'

const Post = () => {
  return (
    <div className='my-6 card p-4 '>
      <img src={borabora} alt="/"
      className='image' />
      <h1 className='text-lg font-semibold uppercase'>borabora</h1>
      <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  )
}

export default Post
