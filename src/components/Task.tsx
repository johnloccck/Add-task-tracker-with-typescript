import React from 'react';
import {FaTimes} from 'react-icons/fa'

type TaskProps = {
    task:any
    onDelete: (id:number) => void
    onToggle: (id:number) => void
  


}
const Task:React.FC<TaskProps> = ({task, onDelete, onToggle}) => {
    return(
        <div className={`task ${task.reminder ?  'reminder': " "}`}
        onClick={()=> onToggle(task.id)}>
            <h3>{task.text} <FaTimes onClick={()=> onDelete(task.id)} style={{color:'red', cursor:'pointer'}}/></h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task