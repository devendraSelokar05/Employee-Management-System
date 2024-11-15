import React from 'react'


const Header = (props) => {
 
  // console.log(props.firstname)
  const userLogout = () =>{
    localStorage.setItem('loggedInUser', "")
    
    props.changeUser('')
    // window.location.reload()
  }
  return (
<div className="flex flex-col sm:flex-row items-end justify-between w-full p-4">
  <h1 className="text-2xl sm:text-3xl font-semibold">
    Hello <br />
    <span className="text-3xl sm:text-4xl font-semibold">
      {props.data && props.data.firstname ? props.data.firstname : 'Admin'}🖐️
    </span>
  </h1>
  <button
    onClick={userLogout}
    className="bg-red-600 text-white text-lg font-medium px-3 py-2 rounded-full mt-4 sm:mt-0 sm:w-auto w-full"
  >
    Logout
  </button>
</div>

  )
}

export default Header