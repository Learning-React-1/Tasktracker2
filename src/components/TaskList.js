import Task from './Task.js'
function TaskList({alltasks}){
return(
<div>
    {
        alltasks.map((task)=>{
            return <Task key={task.id} task={task.task} date={task.date} reminder={task.reminder}></Task>
        })
    }
    <Task  task="adfasdf" date="asdfaf" reminder={true}></Task>
</div>

)


}
export default TaskList;