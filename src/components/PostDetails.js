import React from 'react'
import borabora from '../assets/borabora.jpg'

const PostDetails = () => {
  return (
    <article className='container mx-auto p-4 my-8'>
      <div className="flex md:justify-between items-center flex-wrap py-8">
        <h1 className='h1'>Lorem ipsum dolor sit amet, consectetur adipisicing.</h1>
        <button className='btn '>Delete</button>
      </div>
      <img src={borabora} alt="/" className='w-full h-[320px] object-cover ' />
      <p className='my-8 tracking-tight md:tracking-wide'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quasi, ullam consectetur ab officia eaque veritatis iure atque ad nisi earum voluptates exercitationem id sunt. Doloremque aliquid minus blanditiis quod fugit reprehenderit cupiditate officia? Perspiciatis commodi quas velit facere ratione doloremque, explicabo deserunt magni ad aut molestiae sint dolorum odio. </p>
    </article>
  )
}

export default PostDetails
