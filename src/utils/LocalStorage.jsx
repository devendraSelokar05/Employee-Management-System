// localStorage.clear()
const employees = [
  {
    "id": 1,
    "email": "john@employee.com",
    "password": "123",
    "firstname": "John",
    "taskCounts": {
      "active": 2,
      "newTask": 2,
      "failed": 1,
      "completed": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": true,
        "title": "Complete quarterly report",
        "description": "Prepare and submit the quarterly financial report.",
        "date": "2024-11-05",
        "category": "Finance"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": true,
        "title": "Update client database",
        "description": "Ensure all client information is up-to-date.",
        "date": "2024-11-01",
        "category": "Data Management"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false,
        "title": "Prepare presentation",
        "description": "Prepare slides for upcoming team meeting.",
        "date": "2024-11-08",
        "category": "Presentation"
      }
    ]
  },
  {
    "id": 2,
    "email": "shruti@employee.com",
    "password": "123",
    "firstname": "Shruti",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "failed": 0,
      "completed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
        "title": "Client outreach",
        "description": "Follow up with pending client queries.",
        "date": "2024-11-06",
        "category": "Client Relations"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "completed": true,
        "title": "Inventory update",
        "description": "Check and update inventory for next quarter.",
        "date": "2024-10-30",
        "category": "Inventory"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false,
        "title": "Training session prep",
        "description": "Organize materials for upcoming training session.",
        "date": "2024-11-10",
        "category": "Training"
      }
    ]
  },
  {
    "id": 3,
    "email": "arpita@employee.com",
    "password": "123",
    "firstname": "Arpita",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "failed": 2,
      "completed": 0
    },
    "tasks": [
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false,
        "title": "Software update",
        "description": "Install latest security updates.",
        "date": "2024-10-28",
        "category": "IT"
      },
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false,
        "title": "Audit preparation",
        "description": "Organize documents for annual audit.",
        "date": "2024-11-07",
        "category": "Compliance"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
        "title": "Client onboarding",
        "description": "Assist with onboarding of new clients.",
        "date": "2024-11-04",
        "category": "Client Relations"
      }
    ]
  },
  {
    "id": 4,
    "email": "rohit@employee.com",
    "password": "123",
    "firstname": "Rohit",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "completed": 2
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": true,
        "title": "Draft report",
        "description": "Prepare initial draft for project report.",
        "date": "2024-11-06",
        "category": "Reporting"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": false,
        "title": "Backlog cleanup",
        "description": "Address issues in backlog.",
        "date": "2024-10-29",
        "category": "Maintenance"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": true,
        "title": "Team meeting",
        "description": "Organize agenda for team meeting.",
        "date": "2024-11-09",
        "category": "Meetings"
      }
    ]
  },
  {
    "id": 5,
    "email": "prajwal@employee.com",
    "password": "123",
    "firstname": "Prajwal",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "completed": 1
    },
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "completed": false,
        "title": "Social media content",
        "description": "Draft social media posts for this month.",
        "date": "2024-11-06",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "completed": true,
        "title": "Expense reconciliation",
        "description": "Review and reconcile expenses.",
        "date": "2024-11-02",
        "category": "Finance"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "completed": false,
        "title": "Research competitors",
        "description": "Conduct competitor research for Q4 strategy.",
        "date": "2024-11-04",
        "category": "Research"
      }
    ]
  }
];


const admin =[
      {
        "id": 1,
        "email": "admin@example.com",
        "password": "123"
      }
    ]

   export const setLocalStorage = ()=>{
        localStorage.setItem("employees", JSON.stringify(employees))
        localStorage.setItem("admin", JSON.stringify(admin))
   }

  export const getLocalstorage =()=>{
     const employees= JSON.parse(localStorage.getItem("employees")) || [];
     const admin = JSON.parse(localStorage.getItem("admin"))
    //  console.log(employees, admin)
    
     return {employees, admin}
  }
