import './Input.css'
import { useState } from 'react';
function Input({addtask}){
const [currtaskinput,setCurrTaskInput]=useState('');
const [currdateinput,setCurrDateInput]=useState('');
const [currreminderinput,setCurrReminderInput]=useState(false);
function inputhandler(e){
 
    e.preventDefault();
    if(currdateinput==='' || currtaskinput===''){
        alert('please fill the task and date before submitting');
        return;
    }
    addtask(currtaskinput,currdateinput,currreminderinput);
    setCurrDateInput('');
    setCurrTaskInput('');
    setCurrReminderInput(false);
}
return(
    <div>
        <form onSubmit={(e)=>{inputhandler(e)}}>
            <input type="text"  value={currtaskinput} onChange={(e)=>setCurrTaskInput(e.target.value)}/>
            <input type="text" value={currdateinput} onChange={(e)=>setCurrDateInput(e.target.value)}/>
            <span><input type="checkbox" checked={currreminderinput} onChange={(e)=>setCurrReminderInput(e.target.checked)}/>reminder</span>
            <input type="submit"/>
        </form>
    </div>
    

)
}
export default Input;