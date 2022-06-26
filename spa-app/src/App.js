import "./App.css";

const tarefas = [
  {
    id: "1",
    descricao: "Primeira tarefa"
  },
  {
    id: "2",
    descricao: "Segunda tarefa"
  }
]

function App() {
  return (
    <>
      <form>
        <input id="id" type="text" placeholder="id"/>
        <input id="decricao" type="text" placeholder="descrição"/>
        <button>Add Tarefa</button>
      </form>
      <div className="mt-3">
        <ul className="list-group">
          {tarefas.map(task =>(
            <li key={task.id} className="list-group-item">{task.id} {task.descricao}</li>
          ))}          
        </ul>
      </div>
    </>    
  );
}

export default App;
