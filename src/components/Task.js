import './Task.css'
function Task({id,task,date,reminder,changereminder,deletetask}){
return(
    <div style={{borderColor:colorsetter(reminder),}} className="task" onClick={()=>{changereminder(id)}}>
        <span>
            <div>{task}</div>
            <span onClick={()=>{deletetask(id)}}>x</span>
        </span>
        <div>{date}</div>
    </div>
)
}
function colorsetter(reminder){
 return reminder ? "red":"yellow";
}
export default Task;
