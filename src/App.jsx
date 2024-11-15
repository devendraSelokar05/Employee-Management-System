import React, { useContext, useEffect, useState } from 'react' 
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthProvider'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
  // const [loading, setLoading] = useState(true);
  const authData = useContext(AuthContext) // Using useContext we can access the context

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser")
    if (loggedInUser) {
      const userData = JSON.parse(loggedInUser)
      setUser(userData.role)
      setLoggedInUser(userData.data)
    }
    // setLoading(false);
  }, [])

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === '1234') {
      setUser('admin')
      localStorage.setItem("loggedInUser", JSON.stringify({ role: 'admin' }))
    } else if (authData) {
      const employee = authData.employees.find((e) => email === e.email && password === e.password)
      if (employee) {
        setUser('employee')
        setLoggedInUser(employee) // Ensure employee is set properly
        localStorage.setItem("loggedInUser", JSON.stringify({ role: 'employee', data: employee })) // Save the full employee data
      }
    } else {
      alert("Invalid Credentials")
    }
  }

  // if (loading) {
  //   return <div>Loading...</div>; 
  // }
  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ''}
      {user === 'admin' ? <AdminDashboard changeUser = {setUser} /> : (user === 'employee' ? <EmployeeDashboard changeUser = {setUser} data={loggedInUser} /> : null)} 
    </>
  )
}

export default App