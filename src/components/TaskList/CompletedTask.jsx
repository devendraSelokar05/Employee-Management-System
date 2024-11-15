import React from 'react'

const CompletedTask = ({data}) => {
  return (
    <div className="flex-shrink-0 h-full w-full sm:w-[360px] bg-green-700 p-5 rounded-xl">
    <div className="flex justify-between items-center">
      <h3 className="bg-red-600 px-3 py-1">{data.category}</h3>
      <h4 className="text-xl">{data.date}</h4>
    </div>
    <h2 className="text-2xl mt-5 font-semibold">{data.title}</h2>
    <p className="mt-3 text-xl">{data.description}</p>
    <div className="mt-3">
      <button className="bg-green-800 px-3 py-2 text-xl w-full hover:bg-green-600 sm:w-auto sm:px-5 sm:py-3">
        Completed
      </button>
    </div>
  </div>
  
  )
}

export default CompletedTask