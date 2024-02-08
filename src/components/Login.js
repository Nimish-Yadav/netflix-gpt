import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[issigninform,setissigninform]=useState(true);

    const togglesignin=()=>{
        setissigninform(!issigninform);

    }
  return (
   <>
   <Header/>
    <div className="absolute " >
    <img className="" src="https://assets.nflxext.com/ffe/siteui/vlv3/5e16108c-fd30-46de-9bb8-0b4e1bbbc509/29d8d7d7-83cc-4b5f-aa9b-6fd4f68bfaa6/IN-en-20240205-popsignuptwoweeks-perspective_alpha_website_large.jpg"/>
    </div>

    <form  className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
          <h1 className="font-bold text-3xl py-4 ">{issigninform?"SignIn":"SignUp"}</h1>
        <input type="text" placeholder="Email address" className="p-4 my-4 w-full bg-gray-700"/>
       {!issigninform &&<input type="text" placeholder="Name" className="p-4 my-4 w-full bg-gray-700"/>}
       <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
        <button className="p-4 my-6 bg-red-700 w-full rounded-lg">{issigninform?"SignIn":"SignUp"}</button>
        <p className="py-4 cursor-pointer" onClick={togglesignin}>{issigninform?"New to Netflix? Sign Up Now":"Already Registered? Sign In Now"}</p>



    </form>
     
   
  
  

   </>
  )
}

export default Login