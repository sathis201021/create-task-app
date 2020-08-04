import React, { useContext, useState, useEffect, createContext } from 'react'
import { TaskListContext } from '../context/TaskListContext'

const AddTask = () => {
    const { addTask } = useContext(TaskListContext);
    const [title, setTitle] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title.length) {
            addTask(title) 
            setTitle('')
        }
    }   

    const updateTitle = (e) => {
        setTitle(e.target.value)
    }


    return (
        <div>
            <form onSubmit={handleSubmit} className="form">
                <input type="text" value={title} placeholder="Enter Task ... "
                    onChange={updateTitle} className="task-input"></input>
                <div className="buttons">
                    <button type="submit" className="btn add-task-btn">
                        Add
                </button>
                </div>
            </form>
        </div>
    )
}

export default AddTask
