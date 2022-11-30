import React, { useEffect, useState } from 'react'
import Post from './Post'
import src1 from "../assets/borabora.jpg";
import src2 from "../assets/maldives.jpg";
import src3 from "../assets/keywest.jpg";

const Posts = () => {

  //stock data
  const [posts, setPosts] = useState(null);
  //fetch Data from fake API
  useEffect(()=>{
    fetch("http://localhost:4000/posts")
    .then((res)=>{return res.json()})
    .then((data)=>{return console.log(data); })
   }, [])
  

  //delete cardItem
  const handleDelete = (id) => {
    const copyData = [...posts]
    setPosts(copyData.filter(post=>(post.id !== id)))
  }

  return (
    <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-between max-w-[1240px] m-auto py-8 px-4 '>
        {posts ? posts.map((post,i)=>(
          <Post key={i} post={post} handleDelete={handleDelete} />
        )): 'no posts'}
    
    </section>
  )
}

export default Posts
