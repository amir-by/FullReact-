import React from 'react'
 
const Post = ({post,handleDelete}) => {


   return (
    <div className='my-6 card p-4 '>
      <img src={post.img} alt={post.id}
      className='image' />

      <div className='iflex mt-2'>
        <h1 className='text-lg font-semibold uppercase'>{post.title}</h1>
        {/* Delete btn */}
        <button onClick={()=>handleDelete(post.id)} className='btn'>Delete</button>
      </div>

      <h2>By: <span className='text-red-800 font-bold'> {post.author? post.author :'Amir ♥'}</span> </h2>
      <p className='text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur.</p>
    </div>
  )
}

export default Post
