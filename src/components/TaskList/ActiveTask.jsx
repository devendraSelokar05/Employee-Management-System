import React from 'react'

const ActiveTask = ({data}) => {
  // console.log( data)

  return (
<div className="flex-shrink-0 h-full w-full sm:w-[360px] bg-yellow-400 p-5 rounded-xl">
  <div className="flex justify-between items-center">
    <h3 className="bg-red-600 px-3 py-1">{data.category}</h3>
    <h4 className="text-xl">{data.date}</h4>
  </div>
  <h2 className="text-2xl mt-5 font-semibold">{data.title}</h2>
  <p className="mt-3 text-xl">{data.description}</p>
  <div className="flex justify-between">
    <button className="bg-green-700 hover:bg-green-800 text-xl px-3 py-2 mt-3 w-full sm:w-auto">
      Accepted Task
    </button>
    {/* <button className="bg-red-600 hover:bg-red-800 text-xl px-3 py-2 mt-3 w-full sm:w-auto">Task Failed</button> */}
  </div>
</div>

  )
}

export default ActiveTask