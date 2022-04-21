import { useState } from "react";

const LoginForm = ({Login,error}) => {
    const [details,setDetails]=useState({email:"",password:"",})

const{email,password}=details


const onSubmit=(e)=>{
    e.preventDefault();
    Login(details)
}

// const InputChangeHandler = (e)=>{
//     setDetails({...details,[e.target.name]:e.target.value})
// }



    return ( <>
       <div className="bg-white lg:w-4/12 md:6/12 w-10/12 m-auto my-10 shadow-md">
    <div className="py-8 px-8 rounded-xl">
        <h1 className="font-medium text-2xl mt-3 text-center">Login</h1>
        <form onSubmit={(e)=>onSubmit(e)} className="mt-6">
            <div className="my-5 text-sm">
                <label htmlFor="username" className="block text-black">Email</label>
                <input type="email"
                value={email}
                autoFocus id="username"
                onChange={(e)=>setDetails({...details, email: e.target.value})}
                className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Email" />
            </div>
            <div className="my-5 text-sm">
                <label htmlFor="password" className="block text-black">Password</label>
                <input type="password" id="password"
                 onChange={(e)=>setDetails({...details, password: e.target.value})}
                 value={password} className="rounded-sm px-4 py-3 mt-3 focus:outline-none bg-gray-100 w-full" placeholder="Password" />
                <div className="flex justify-end mt-2 text-xs text-gray-600">
                  <button></button>
                </div>
            </div>

            <button className="block text-center text-white bg-gray-800 p-3 duration-300 rounded-sm hover:bg-black w-full">Login</button>
        </form>

       
      
        <p className="mt-12 text-xs text-center font-light text-gray-400"> Don't have an account? <button className="text-black font-medium"> Create One </button>  </p> 

    </div>
</div>
 
    </> );
}
 
export default LoginForm;