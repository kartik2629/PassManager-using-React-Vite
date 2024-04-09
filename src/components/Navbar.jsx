import React from 'react'

const navbar = () => {
  return (<div className="backdrop-blur-sm">
    <nav className=' border border-purple-900 text-white text-xl   bg-[radial-gradient(#400F7820_1px,#BC9CE0_1px)] bg-[size:20px_20px] w-auto'>
      <div className="mycontainer flex justify-between items-center px-2 py-2">
        <div className='logo font-bold'>
          <span className=' text-purple-900'> &lt;</span>
          Password Manager
          <span className=' text-purple-900'>/&gt;</span>
        </div>
        {/* <ul className='spa'>
          <li className='gap-4 flex'>
            <a href="/" className='hover:font-bold'>Home</a>
            <a href="# " className='hover:font-bold'>About</a>
            <a href="# " className='hover:font-bold'>Contact</a>
          </li>
        </ul> */}
        <button className='text-white bg-green-700 rounded-full flex justify-between ring-1 ring-white
        items-center'>
          <lord-icon
            src="https://cdn.lordicon.com/ercyvufy.json"
            trigger="hover"
            colors="primary:#ffffff">
          </lord-icon>
          <span className=' font-bold px-2'>GitHub</span>
        </button>
      </div>
    </nav></div>
  )
}

export default navbar
/*text-white backdrop-blur-sm bg-[#00000050] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] flex justify-between items-center px-5 h-24*/