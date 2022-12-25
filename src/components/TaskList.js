import Task from './Task.js'
import './TaskList.css'
function TaskList({alltasks,changereminder,deletetask}){
   
    
return(
<div>
    {
        alltasks.map((task)=>{
            return <Task className="task" key={task.id} id={task.id} task={task.task} date={task.date} reminder={task.reminder} deletetask={deletetask} changereminder={changereminder}/>
        })
    }
</div>
)
}
export default TaskList;