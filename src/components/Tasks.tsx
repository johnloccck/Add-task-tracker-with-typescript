const Tasks
// : React.FC<{task}>
 = () => {
    const tasks =[
        {
            id:1,
            text:"Doctors",
            day:"Feb 5th",
            reminder: true
        },
        {
            id:2,
            text:"School",
            day:"Marth 6th",
            reminder: false
        },
        {
            id:3,
            text:"Market",
            day:"Jun 7th",
            reminder: true
        }
    ]
    return(

        <>
        {tasks.map((task)=>(
            <h3>{task.text}</h3>
        ))}
        </>
    )
}

export default Tasks