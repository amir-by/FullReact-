import React from 'react'

const Navbar = () => {
  return (
    <div className=' bg-gray-300 p-2 w-full  '>
      {/* container */}
      <div className='container mx-auto flex justify-between items-center'>
        <h1 className='font-bold text-3xl'>Code.</h1>
        
        <div className="flex items-center gap-4 font-medium text-xl cursor-pointer">
          <a href='/'>Home</a>
          <a href='/post' className='btn'>New Post</a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
