import React from 'react'
import NewTask from '../TaskList/NewTask'
import FailedTask from '../TaskList/FailedTask'
import CompletedTask from '../TaskList/CompletedTask'
import ActiveTask from '../TaskList/ActiveTask'

const TaskList = ({data}) => {

  // if (!data || !data.tasks) {
  //   return <div>Loading tasks...</div>; // Show loading until tasks are available
  // }
  return (
    <div id='tasklist' className='h-[55%] overflow-x-auto w-full py-5 mt-10 flex items-center justify-start gap-5 flex-nowrap'>
     
            {data.tasks.map((elem, index)=>(
                 <React.Fragment key={index} >
                 {elem?.active && <ActiveTask  data={elem}/>}
                 {elem?.newTask && <NewTask  data={elem}/>}
                 {elem?.completed && <CompletedTask data={elem} />}
                 {elem?.failed && <FailedTask  data={elem}/>}
               </React.Fragment>
            ))}
  
    </div>
  )
}

export default TaskList