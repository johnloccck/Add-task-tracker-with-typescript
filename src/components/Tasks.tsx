import Task from "./Task"

type TasksProps = {
    tasks: any[];
    onDelete: (id:number) => void
    onToggle: (id:number) => void
  };
  
const Tasks: React.FC<TasksProps>= ({tasks, onDelete, onToggle}) => {
    
   
    return(<>
        {tasks.map((task: any)=>(
         <Task 
            key={task.id}
            task={task}
            onDelete={onDelete}
            onToggle={onToggle}
          
         />
        ))}
        </>
    )
}

export default Tasks

