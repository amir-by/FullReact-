import React from 'react'
import Post from './Post'

const Posts = () => {
  return (
    <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-between max-w-[1240px] m-auto py-8 px-4 '>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
    </section>
  )
}

export default Posts
