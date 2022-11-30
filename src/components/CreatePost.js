import React from 'react'

const CreatePost = () => {
  return (
    <section className='max-w-[600px] m-auto iflex flex-col bg-slate-500  p-4 rounded-md  '>
        <h1 className='h1 text-center py-4'>Create new Post</h1>
        <form className='grid px-6 py-6 bg-red-500 w-5/6 rounded-lg shadow-xl'>
          <label htmlFor="">Post Name :</label>
          <input className='p-2 rounded-md my-2' type="text" required placeholder='Post name' />
          <label htmlFor="">url image :</label>
          <input className='p-2 rounded-md my-2' type="url" required placeholder='url img' />

          <label htmlFor="">Text Blog :</label>
          <textarea placeholder='Message' cols="20" rows="5"></textarea>

          <label htmlFor="">Author :</label>
            <select className='p-2 rounded-md my-2' >
              <option  value="Admin">Admin</option>
              <option  value="User">User</option>
            </select>

          <button className='btn font-bold'>Submit</button>
        </form>
    </section>
  )
}

export default CreatePost
