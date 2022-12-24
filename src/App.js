
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
  /****************************************************************** */
  return (
    <div className="App">
      <Header changeshowinput={changeshowinput}></Header>
      {showinput ? <Input></Input>: <span></span>}
      <TaskList alltasks={alltasks}></TaskList>
      
    </div>
  );
}

export default App;
