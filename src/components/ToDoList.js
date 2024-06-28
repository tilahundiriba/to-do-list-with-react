import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPlus, faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';

import './to-do-list.css';
const ToDoList = () => {
    const [newTask, setNewTask] = useState('');
    const [task, setTask] = useState([]);
    function handleInputChange(event) {
        setNewTask(event.target.value);
    }
    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask('');
        }

    }
    function deleteTask(index) {
        const upDatedTasks = task.filter((_, i) => i !== index);
        setTask(upDatedTasks);
    }
    function moveTaskUp(index) {
        if (index > 0) {
            const upDatedTasks = [...task];
            [upDatedTasks[index], upDatedTasks[index - 1]] = [upDatedTasks[index - 1], upDatedTasks[index]];
            setTask(upDatedTasks)
        }
    }
    function moveTaskDown(index) {
        if (index < task.length - 1) {
            const upDatedTasks = [...task];
            [upDatedTasks[index], upDatedTasks[index + 1]] = [upDatedTasks[index + 1], upDatedTasks[index]];
            setTask(upDatedTasks)
        }
    }
    return (
        <div className='to-do-list'>
            <h1>To Do List </h1>
            <div>
                <input type="text"
                    placeholder='Enter a task..'
                    value={newTask}
                    onChange={handleInputChange} />
                <button
                    onClick={addTask}
                    className='add-button'
                ><FontAwesomeIcon icon={faPlus} /></button>
            </div>
            <ol>
                {task.map((task, index) => <li key={index}>
                    <span className='text'>{task}</span>
                    <button className="delete-button" onClick={() => deleteTask(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                    <button className="move-button" onClick={() => moveTaskUp(index)}>
                        
                        <FontAwesomeIcon icon={faAngleUp} />
                    </button>
                    <button className="move-button" onClick={() => moveTaskDown(index)}>
                       
                        <FontAwesomeIcon icon={faAngleDown} />
                    </button>
                </li>
                )}
            </ol>
        </div>
    )
}

export default ToDoList;
