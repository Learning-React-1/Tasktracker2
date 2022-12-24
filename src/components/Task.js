import './Task.css'
function Task({task,date,reminder}){
return(
    <div style={{borderColor:colorsetter(reminder),}} className="task">
        <div>{task}</div>
        <div>{date}</div>
    </div>
)
}
function colorsetter(reminder){
 return reminder ? "red":"green";
}
export default Task;
