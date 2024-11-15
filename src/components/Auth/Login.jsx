import React, { useState } from 'react'

const Login = ({handleLogin}) => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
    const handleSubmit =(e)=>{
        e.preventDefault()
        if (!email || !password) {
            setError("Email and password are required")
            return
        }
        console.log("Form submitted")
        handleLogin(email, password)
       setEmail("")
       setPassword("")
       

    }
  return (
    <div className="flex h-screen w-screen items-center justify-center px-4">
  <div className="border-2 rounded-xl border-emerald-600 p-8 md:p-16 lg:p-24 w-full max-w-lg">
    <form
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      className="flex flex-col items-center justify-center"
    >
      <input
        required
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="border-2 border-emerald-600 rounded-full py-3 px-6 text-xl outline-none bg-transparent placeholder:text-gray-400 w-full"
        type="email"
        placeholder="Enter Your Email"
      />
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
        className="border-2 border-emerald-600 rounded-full py-3 px-6 text-xl outline-none bg-transparent placeholder:text-gray-400 mt-5 w-full"
        type="password"
        placeholder="Enter Password"
      />
      <button className="text-white bg-emerald-600 rounded-full hover:bg-gray-700 py-3 px-16 mt-5 w-full md:w-auto">
        Login
      </button>
    </form>
  </div>
</div>

  )
}

export default Login