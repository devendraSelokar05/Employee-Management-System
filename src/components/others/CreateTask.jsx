import React, { useState, useEffect } from 'react';

const CreateTask = () => {
  // console.log(refreshTasks);
  const [tasktitle, setTasktitle] = useState('');
  const [taskdate, setTaskDate] = useState('');
  const [assignTo, setAssignTo] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const [newTask, setNewTask] = useState([]);

   useEffect(() => {
    // Load existing tasks from localStorage on mount
    const data = JSON.parse(localStorage.getItem('employees')) || [];
    setNewTask(data);
  }, []);

  const submithandler = (e) => {
    e.preventDefault();

    // Validation to ensure all fields are filled
    if (!tasktitle || !taskdate || !assignTo || !category || !description) {
      alert('Please fill out all fields');
      return;
    }

    // Create a task object
    const Task = {
      tasktitle,
      taskdate,
      assignTo,
      category,
      description,
      active: false,
      newTask: true,
      completed: false,
      failed: false,
    };

    // Get existing data from localStorage
    const data = JSON.parse(localStorage.getItem('employees')) || [];

    // Check if assignTo matches an existing employee
    const employeeExists = data.some((emp) => emp.firstname === assignTo);
    if (!employeeExists) {
      alert('Assigned employee does not exist');
      return;
    }

    // Update tasks for the matched employee
    const updatedData = data.map((elem) => {
      if (assignTo === elem.firstname) {
        return {
          ...elem,
          tasks: [...(elem.tasks || []), Task], // Add new task
        };
      }
      return elem;
    });

    // Update state and localStorage
    setNewTask(updatedData);
    localStorage.setItem('employees', JSON.stringify(updatedData));



    setTasktitle('');
    setTaskDate('');
    setAssignTo('');
    setCategory('');
    setDescription('');
  };
  return (
    <div className='p-5 bg-[#1c1c1c] mt-5 rounded'>
    <form onSubmit={submithandler} className='flex flex-wrap w-full items-start justify-between'>

          <div className='w-1/2'>

          <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Task Title</h3>
                <input className='text-sm py-1 px-2 w-4/5 rounded outline-none ng-transparent text-black font-semibold' 
                type="text"
                 placeholder='Make A Ui Design'
                 value={tasktitle}
                 onChange={(e)=>{
                  setTasktitle(e.target.value)
                 }}
                  />
            </div>

            <div>
              <h3 className='text-sm text-gray-300 mb-0.5'>Date</h3>
              <input  className='text-sm py-1 px-2 w-4/5 rounded outline-none ng-transparent  text-black font-semibold' 
              type="date" 
              placeholder='dd/mm/yy'
              value={taskdate}
              onChange={(e)=>{
                setTaskDate(e.target.value)
              }}
               />
          </div>

          <div>
            <h2 className='text-sm text-gray-300 mb-0.5'>Assign To</h2>
            <input  className='text-sm py-1 px-2 w-4/5 rounded outline-none ng-transparent  text-black font-semibold'  
            type="text" 
            placeholder='employee name' 
            value={assignTo}
            onChange={(e)=>{
              setAssignTo(e.target.value)
            }}
            />
          </div>

        <div>
            <h2 className='text-sm text-gray-300 mb-0.5'>Category</h2>
            <input  className='text-sm py-1 px-2 w-4/5 rounded outline-none ng-transparent  text-black font-semibold' 
            type="text"
             placeholder='Design Dev, etc'
             value={category}
             onChange={(e)=>{
              setCategory(e.target.value)
             }}
              />
        </div>

          </div>
           
          
          <div className='w-2/5 flex  flex-col items-start'>
            <h3 className='text-sm text-gray-300 mb-0.5'>Description</h3>
            <textarea className='w-full h-40 text-sm px-4 rounded outline-none  text-black font-semibold'
            value={description}
            onChange={(e)=>{
              setDescription(e.target.value)
            }}
            ></textarea>
            <button className='bg-emerald-400 py-3 hover:bg-emerald-600 mt-5 w-full'> Create Task</button>
          </div>

      
    </form>

  </div>
  );
};

export default CreateTask;
