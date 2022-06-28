import {useState, useEffect} from 'react';

const initialTask = {
  id: 0,
  titulo: '',
  subtitulo: '',
  prioridade: '0',
  descricao: '',
} 

const TaskForm = (props) => {

  const [task, setTask] = useState(taskActual());

  useEffect(() => {
    if(props.taskSelected.id !== 0)
    setTask(props.taskSelected)
  }, [props.taskSelected]);

  const inputTextHandler = (e) => {
    const {name, value} = e.target
    setTask({...task, [name]: value})
  }

  const handleCancel = (e) =>{
    e.preventDefault()
    props.cancelTask()
    setTask(initialTask)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(props.taskSelected.id !== 0)
      props.updateTask(task)
    else 
      props.addTask(task)

      setTask(initialTask)
  }

  function taskActual() {
    if(props.taskSelected.id !== 0){
      return props.taskSelected
    }else
    {
      return initialTask;
    }
  }

  return (
    <div className="my-2 py-2">
      <>
      <h2>Tarefa {task.id !== 0 ? task.id : ''}</h2>
        <form className="row g-3" onSubmit={handleSubmit}>
              <div className="col-md-6">
                  <label className="form-label">Titulo</label>
                  <input
                  className="form-control"
                  name='titulo'
                  id="titulo"
                  type="text"
                  placeholder="Titulo"
                  onChange={inputTextHandler}
                  value={task.titulo}
                  />
              </div>
            <div className="col-md-6">
                <label className="form-label">Subtitulo</label>
                <input
              className="form-control"
              name='subtitulo'
              id="subtitulo"
              type="text"
              placeholder="Subtitulo"
              onChange={inputTextHandler}
                  value={task.subtitulo}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Descrição</label>
              <textarea
                  className="form-control"
                  name='descricao'
                  id="descricao"
                  type="text"
                  placeholder="Descrição"
                  onChange={inputTextHandler}
                  value={task.descricao}
                  />
          </div>
          <div className="col-md-6">
              <label className="form-label">Prioridade</label>
              <select name='prioridade' id="prioridade" onChange={inputTextHandler} value={task.prioridade} className="form-select">
                <option defaultValue="0">Selecionar...</option>
                <option value="1">Baixa</option>
                <option value="2">Normal</option>
                <option value="3">Alta</option>
              </select>
          </div>
          <div className="d-flex justify-content-end pt-2 mt-2">
            {task.id === 0 ? (
              <button className="btn btn-primary" type='submit'>
              <i className="fa-solid fa-plus me-1"></i>
                Nova Tarefa
              </button>
            ) : (
              <>
              <button className="btn btn-success" type='submit'>
              <i className="fa-solid fa-floppy-disk me-1"></i>
                Salvar
              </button>
              <button className="btn btn-secondary mx-2" onClick={handleCancel}>
              <i className="fa-solid fa-ban me-1"></i>
                Cancelar
              </button>
              </>
            )}
          </div>
        </form>
      </>
    </div>
  );
}

export default TaskForm;
