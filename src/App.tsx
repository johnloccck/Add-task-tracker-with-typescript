import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks'
import {useState} from 'react'


import './App.css';
function  App() {
  
  const [tasks, setTask] = useState([
    {
        id:1,
        text:"Doctors",
        day:"Feb 5th",
        reminder: true
    },
    {
        id:2,
        text:"School",
        day:"Mart 6th",
        reminder: false
    },
    {
        id:3,
        text:"Market",
        day:"Jun 7th",
        reminder: true
    }
])


const deleteTask = (id:number)=> {
  console.log('delete', id)
  setTask(tasks.filter(task => task.id!== id))
}

const toggleReminder = (id:number)=> {
  console.log('toggleReminder', id)
    setTask(tasks.map(task => task.id===id? {
     ...task,
      reminder:!task.reminder
    } : task))
}

  return (
    <div className='container' >
      <Header title="Hello"/>
      {tasks.length > 0 ? <Tasks  tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : 'No tasks found'}
     
    </div>
  );
}

export default App;
