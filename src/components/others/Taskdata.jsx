import React from 'react';

const Taskdata = ({ data }) => {
  // if (!data || !data.taskCounts) {
  //   return <div>Loading...</div>; 
  // }
  return (
    <div className="flex flex-wrap mt-10 justify-between gap-5">
    <div className="rounded-xl w-full sm:w-[48%] md:w-[23%] py-6 px-9 bg-blue-400">
      <h2 className="text-2xl font-semibold">{data.taskCounts.newTask}</h2>
      <h3 className="text-xl font-medium">New Task</h3>
    </div>
  
    <div className="rounded-xl w-full sm:w-[48%] md:w-[23%] py-6 px-9 bg-red-400">
      <h2 className="text-2xl font-semibold">{data.taskCounts.failed}</h2>
      <h3 className="text-xl font-medium">Failed Task</h3>
    </div>
  
    <div className="rounded-xl w-full sm:w-[48%] md:w-[23%] py-6 px-9 bg-yellow-400">
      <h2 className="text-2xl font-semibold">{data.taskCounts.active}</h2>
      <h3 className="text-xl font-medium">Active Task</h3>
    </div>
  
    <div className="rounded-xl w-full sm:w-[48%] md:w-[23%] py-6 px-9 bg-green-700">
      <h2 className="text-2xl font-semibold">{data.taskCounts.completed}</h2>
      <h3 className="text-xl font-medium">Completed Task</h3>
    </div>
  </div>
  
  );
};

export default Taskdata;
