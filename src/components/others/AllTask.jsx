import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

   const authdata = useContext(AuthContext)
//    console.log(authdata.employees)
  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
          <div className='bg-red-400 py-2 px-4 mb-2 flex  justify-between rounded'>
            <h2 className='text-lg font-medium w-1/5 '>Employee Name</h2>
            <h3 className='text-lg font-medium w-1/5 '>New Task</h3>
            <h5 className='text-lg font-medium w-1/5 '>Active Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Completed Task</h5>
            <h5 className='text-lg font-medium w-1/5 '>Failed Task</h5>
        </div>
        <div className='h-[80%] overflow-auto'>
        {authdata.employees.map((elem, index)=>{
            return  <div key={index} className='bg-black-600  py-2 px-4 mb-2 flex  justify-between rounded  '>
            <h2 className='w-1/5 text-lg font-medium '>{elem.firstname}</h2>
            <h3 className='w-1/5 text-lg font-medium ms-[80px] text-blue-400'>{elem.taskCounts.newTask}</h3>
            <h5 className='w-1/5 text-lg font-medium ms-[80px] text-yellow-400'>{elem.taskCounts.active}</h5>
            <h5 className='w-1/5 text-lg font-medium ms-[80px] text-green-600'>{elem.taskCounts.completed}</h5>
            <h5 className='w-1/5 text-lg font-medium ms-[80px] text-red-400'>{elem.taskCounts.failed}</h5>
        </div>
        })}
        </div>


       
    </div>
  )
}

export default AllTask