import React from "react";

const Task = (props) => {
  
  function prioridadeLabel(params) {
    switch (params) {
      case '1':
        return 'Baixa';
      case '2':   
        return 'Normal';
      case '3':
        return 'Alta';  
      default:
        return 'Não definido';
    }
  }

  function prioridadeIcon(params) {
    switch (params) {
      case '1':
        return 'smile text-success';
      case '2':   
        return 'meh text-primary';
      case '3':
        return 'frown text-danger';  
      default:
        return 'Não definido';
    }
  }

  function prioridadeBorder(params) {
    switch (params) {
      case '1':
        return 'border border-success';
      case '2':   
        return 'border border-primary';
      case '3':
        return 'border border-danger';  
      default:
        return 'Não definido';
    }
  }

  return (
    <div className={"card my-2 shadow " + prioridadeBorder(props.task.prioridade)}>
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            <span className="badge rounded-pill bg-secondary me-1">
              {props.task.id}
            </span>
            - {props.task.titulo}
          </h5>
          <h6>
            Prioridade:
            <span className={"ms-1 " + prioridadeIcon(props.task.prioridade)}>
              <i
                className={
                  "me-1 fa-regular fa-face-" + prioridadeIcon(props.task.prioridade)
                }
              ></i>
              {prioridadeLabel(props.task.prioridade)}
            </span>
          </h6>
        </div>
        <h6 className="card-subtitle my-2 fw-bold ms-2">{props.task.subtitulo}</h6>
        <p className="ms-1 card-text">{props.task.descricao}</p>
        <div className="d-flex justify-content-end pt-2 m-0 border-top">
          <button className="btn btn-primary mx-2" 
            onClick={() => props.pegarTask(props.task.id)} >
            <i className="me-1 fa-regular fa-pen-to-square"></i>
            Editar
          </button>
          <button className="btn btn-danger"
              onClick={() => props.deleteTask(props.task.id)} >
              <i className="me-1 fa-regular fa-trash-can"></i>
            Apagar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
