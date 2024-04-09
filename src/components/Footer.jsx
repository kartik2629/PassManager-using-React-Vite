import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className='logo font-bold border border-purple-900 text-white text-xl backdrop-blur-sm bg-slate-800 bg-[radial-gradient(#400F7820_1px,#BC9CE0_1px)] flex justify-center items-center bg-[size:20px_20px] fixed bottom-0 w-full'>
                <span className=' text-purple-900'>&lt;</span>
                Password Manager
                <span className=' text-purple-900'> /&gt;&nbsp;</span>
                
                <div className="flex justify-center items-center">    
                Created BY Kartik Gupta using React <img src="react.svg" className='w-9 mx-2'  alt="" /> and Vite <img src="vite.svg" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Footer