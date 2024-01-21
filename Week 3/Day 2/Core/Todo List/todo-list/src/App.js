import './App.css';
import ListDisplay from './components/ListDisplay';
import ListForm from './components/ListForm';
import { useState } from 'react';


function App() {
  const [tasklist, setTaskList] = useState([]);

  const updateTaskList = (newTask) => {
    setTaskList((prevTask) => (
      [...prevTask, newTask]
    ))
  }

  const handleDone = (thisTask) => {
    let updatedtasks = tasklist.map((task) => {
      if (task === thisTask){
        let lastTask = {...task};
        lastTask.isDone = !lastTask.isDone;
        return lastTask
      }
      else{
        return task;
      }
    });
    setTaskList(updatedtasks);
  }

  const deleteButton = (thisId) => {
    const filteredTasks = tasklist.filter((task) => {
      return task.id !== thisId;
    }
    );
    setTaskList(filteredTasks);
  };


  return (
    <div className="App">
      <ListForm updateTaskList = {updateTaskList} />
      <ListDisplay tasklist = {tasklist} deleteButton = {deleteButton} handleDone = {handleDone} />
    </div>
  );
}

export default App;
