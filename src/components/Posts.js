import React, { useState } from 'react'
import Post from './Post'
import src1 from "../assets/borabora.jpg";
import src2 from "../assets/maldives.jpg";
import src3 from "../assets/keywest.jpg";

const Posts = () => {

  const myData = [
    {id:1 , title:"title 1" , img:src1 , author:"Admin" },
    {id:2 , title:"title 2" , img:src2 , author:"User" },
    {id:3 , title:"title 3" , img:src3 ,  },
  ]

  const [data, setData] = useState(myData);
  
  const handleDelete = (id) => {
   
    const copyData = [...data]
    setData(copyData.filter(post=>(post.id !== id)))
  }

  return (
    <section className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8  justify-between max-w-[1240px] m-auto py-8 px-4 '>
        {data.map((item,i)=>(
          <Post key={i} item={item} handleDelete={handleDelete} />
        ))}
    
    </section>
  )
}

export default Posts
