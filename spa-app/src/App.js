import "./App.css";
import { useState, useEffect } from "react";
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList";

let initialState = []

function App() {

  const [index, setIndex] = useState(0);
  const [tasks, setTasks] = useState(initialState);
  const [task, setTask] = useState({id: 0});

  useEffect(() => {
    tasks.length <= 0 ? setIndex(1) :
    setIndex(Math.max.apply(Math, tasks.map((item) => item.id)) + 1)
  }, [tasks]);

  function addTask(tas) {   
    setTasks([...tasks, { ...tas, id: index }]);
  }

  function cancelTask(){
    setTask({id: 0})
  }

  function updateTask(ts){
    setTasks(tasks.map(item => item.id === ts.id ? ts : item))
    setTask({id: 0})
  }

  function deleteTask(id){
    const taskFilter = tasks.filter(task => task.id !== id);
    setTasks([...taskFilter]);
  }

  function pegarTask(id) {
    const task = tasks.filter(task => task.id === id);
    setTask(task[0])
  }

  return (
    <>
        <h1 className="display-5 fw-bold text-center pt-3 mt-3">Gerenciador de Tarefas</h1>
        <TaskForm addTask={addTask} tasks={tasks} taskSelected={task} updateTask={updateTask} cancelTask={cancelTask}/>
        <TaskList deleteTask={deleteTask} tasks={tasks} pegarTask={pegarTask}/>
    </>    
  );
}

export default App;
