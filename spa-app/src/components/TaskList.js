import React from 'react';
import Task from './Task';

const TaskList = (props) => {
    return (
        <div className="my-3">          
            {props.tasks.map(task =>(
                <Task key={task.id} 
                deleteTask={props.deleteTask} 
                task={task} 
                pegarTask={props.pegarTask}
                />
            ))}               
        </div>
    );
}

export default TaskList;
