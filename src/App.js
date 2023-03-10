
import './App.css';
import Header from './components/Header.js'
import TaskList from './components/TaskList.js';
import {useState} from 'react';
import Input from './components/Input.js'
function App() {
  const [showinput,setShowInput]=useState(true);
  const [alltasks,setAllTasks]=useState([
    {
      id:"1",
      task:"start owrking on react",
      date:"12 decmber",
      reminder:true,
    },
    {
      id:"2",
      task:"start owrking on microsreves",
      date:"13 decmber",
      reminder:true,
    },
    {
      id:"3",
      task:"start owrking on cloud",
      date:"14 decmber",
      reminder:false,
    },
    {
      id:"4",
      task:"start owrking on angular",
      date:"16 decmber",
      reminder:true,
    },
  ]);

/********************************************************************** */

  function changeshowinput(){
    console.log('changeshowinput clicked');
    setShowInput((input)=>{return !input})
  }
  function changereminder(taskid){
    setAllTasks(
      (prevtasks)=>{
        let clonedtasks=prevtasks.map(item=> {return {...item}})
        return clonedtasks.map((task)=>{
            if(task.id===taskid){
              task.reminder=!task.reminder;
              return task;
            }
            else{
              return task;
            }
        })
      }
    )
    }
  function addtask(currtask,currdate,currreminder){
    setAllTasks((prevalltasks)=>{
      let tempid=Math.random()*1000000;
      let objecttoadd={id:tempid,task:currtask,date:currdate,reminder:currreminder}
      let clonedtasks=prevalltasks.map((task)=>{return {...task}})
      clonedtasks.push(objecttoadd);
      return clonedtasks;
    }
      
    )
    
  }
  function deletetask(id){

    setAllTasks((prevalltasks)=>{
      let clonedtasks=alltasks.map((task)=>{return {...task}})

      return clonedtasks.filter((currtask)=>{
        return currtask.id!==id;
      });
      
    })
  }
  /****************************************************************** */
  return (
    <div className="App">
      <Header changeshowinput={changeshowinput}></Header>
      {showinput ? <Input addtask={addtask}></Input>: <span></span>}
      <TaskList alltasks={alltasks} changereminder={changereminder} deletetask={deletetask}></TaskList>
      
    </div>
  );
}

export default App;
