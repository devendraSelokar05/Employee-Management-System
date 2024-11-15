import React, { useEffect, useState } from 'react'
import Header from '../others/Header'
import Taskdata from '../others/Taskdata'
import TaskList from '../others/TaskList'

const EmployeeDashboard = (props) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch tasks from localStorage
    const data = JSON.parse(localStorage.getItem("employees")) || [];
    const employeeTasks = data.find(employee => employee.firstname === props.data.firstname)?.tasks || [];
    setTasks(employeeTasks);
  }, [props.data]); // Will refresh whenever props.data changes
  
  return (
    <div className='p-10 bg-[#1C1C1C] h-screen'>
    <Header changeUser={props.changeUser} data = {props.data}/>
    <Taskdata data = {props.data} />
    <TaskList data = {props.data}/> 
    </div>
  )
}

export default EmployeeDashboard