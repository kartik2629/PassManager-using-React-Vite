import React from 'react'
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef()
  const passwordRef = useRef()
  const [form, setform] = useState({ site: "", username: "", pass: "" })
  const [PasswordArray, setPasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    let PasswordArray;
    if (passwords) {
      setPasswordArray(JSON.parse(passwords))
    }

  }, []);

  const copyText = (text) => {
    toast('Copied to Clipboard', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      //transition: Bounce,
    });

    navigator.clipboard.writeText(text)
  }

  const showPass = () => {
    passwordRef.current.type = 'text'
    console.log(ref.current.src)
    if (ref.current.src.includes("eyecross.png")) {
      passwordRef.current.type = 'text'
      ref.current.src = "eye.png"
    }
    else {
      ref.current.src = "eyecross.png"
      passwordRef.current.type = 'password'
    }
  }

  const savePass = () => {
    setPasswordArray([...PasswordArray, { ...form, id: uuidv4() }])
    localStorage.setItem("passwords", JSON.stringify([...PasswordArray, { ...form, id: uuidv4() }]))
    console.log([...PasswordArray, form])
    setform({ site: "", username: "", pass: "" })
    toast('Password Saved', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      //transition: Bounce,
    });
  }

  const delPass = (id) => {
    console.log("Deleting Passwrod with id", id)
    let c = confirm("Confirm to delete Password !")
    if (c) {
      setPasswordArray(PasswordArray.filter(item => item.id !== id))
      localStorage.setItem("passwords", JSON.stringify(PasswordArray.filter(item => item.id !== id)))
      toast('Password Deleted', {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        //transition: Bounce,
      });
    }
  }

  const editPass = (id) => {
    console.log("Editing Passwrod with id", id)
    setform(PasswordArray.filter(item => item.id === id)[0])
    setPasswordArray(PasswordArray.filter(item => item.id !== id))
    toast('Password Edited', {
      position: "bottom-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      //transition: Bounce,
    });
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }



  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition="Bounce" />
      {/* Same as */}
      <ToastContainer />


      <div className="inset-0 -z-50 fixed top-8  bg-black [background:radial-gradient(105%_105%_at_50%_50%,#BC9CE0_30%,#63e_90%)]"></div>

      <div className=" px-2 md:mycontainer text-slate-700 font-bold text-center">
        <h1 className='text-4xl'>
          Password Manager
        </h1>
        <p className="text-2xl">
          Easy To Manage Your all Passwords
        </p>
        <div className='text-slate-800 flex flex-col p-5  gap-3 items-center'>
          <input value={form.site} onChange={handleChange} placeholder="Enter Website Name" className='rounded-full border border-blue-800 w-full p-4 py-1' type="text" name="site" id="" />
          <div className="flex w-full gap-3 justify-between ">
            <input value={form.username} onChange={handleChange} placeholder='Enter Username' className='rounded-full border border-blue-800 w-full p-3 py-1' type="text" name="username" id="" />

            <div className="relative">
              <input ref={passwordRef} value={form.pass} onChange={handleChange} placeholder='Enter Password' className='rounded-full border border-blue-800 w-full p-3 py-1' type="password" name="pass" id="" />
              <span className="absolute right-[5px] top-[2px] cursor-pointer" onClick={showPass}>
                <img ref={ref} className='p-1' width={30} src="eye.png" alt="eye" />
              </span>
            </div>
          </div>
          <button onClick={savePass} className='flex justify-center items-center text-2xl bg-blue-600 rounded-full px-2 py-2 w-fit hover:bg-blue-400 text-slate-800'>
            <lord-icon
              src="https://cdn.lordicon.com/hqymfzvj.json"
              trigger="hover">
            </lord-icon>Save Password</button>
        </div>

        <div className="password">
          <h2 className='font-bold text-3xl py-4'>Your Passwords</h2>
          {PasswordArray.length === 0 && <h1 className='text-2xl'>No Passwords Saved</h1>}
          {PasswordArray.length != 0 &&

            <table className="table-auto w-full rounded-md overflow-hidden">
              <thead className="bg-purple-300">

                <tr>
                  <th className="py-2">Site</th>
                  <th className="py-2">Username</th>
                  <th className="py-2">Password</th>
                  <th className="py-2">Actions</th>
                </tr>

              </thead>
              <tbody className='bg-purple-200'>
                {PasswordArray.map((item, index) => {
                  return <tr key={index}>

                    <td className="text-center py-1 border border-purple-300">
                      <div className='flex items-center justify-center'>
                        <a href={item.site} target='blank'>{item.site}</a>
                        <div className=' lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.site) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "2px", "paddingLeft": "5px" }}
                            src="https://cdn.lordicon.com/xljvqlng.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="text-center py-1 border border-purple-300">
                      <div className=" flex justify-center items-center">
                        <span>{item.username}</span>
                        <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.username) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "2px", "paddingLeft": "5px" }}
                            src="https://cdn.lordicon.com/xljvqlng.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className="text-center  py-1 border border-purple-300">
                      <div className="flex justify-center items-center">
                        <span>{item.pass}</span>
                        <div className='lordiconcopy cursor-pointer size-7' onClick={() => { copyText(item.pass) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "2px", "paddingLeft": "5px" }}
                            src="https://cdn.lordicon.com/xljvqlng.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </div>
                    </td>

                    <td className='text-center  py-1 border border-purple-300'>
                      <span className="flex justify-center items-center">
                        <div className='lordiconcopy cursor-pointer size-7 mx-2' onClick={() => { editPass(item.id) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "2px", "paddingLeft": "5px" }}
                            src="https://cdn.lordicon.com/ghhwiltn.json"
                            colors="primary:#121331,secondary:#000000"
                            trigger="hover">
                          </lord-icon>
                        </div>
                        <div className='lordiconcopy cursor-pointer size-7 mx-2' onClick={() => { delPass(item.id) }}>
                          <lord-icon
                            style={{ "width": "25px", "height": "25px", "paddingTop": "2px", "paddingLeft": "5px" }}
                            src="https://cdn.lordicon.com/wpyrrmcq.json"
                            trigger="hover">
                          </lord-icon>
                        </div>
                      </span>

                    </td>

                  </tr>
                })}

              </tbody>
            </table>}
        </div>
      </div>


    </>)
}

export default Manager
// 1:31:43