import React, {useContext} from 'react'
import { TaskListContext } from '../context/TaskListContext'

const Task = ({ task }) => {

    const {deleteTask} = useContext(TaskListContext)

    const deleteTodo = id => {
        deleteTask(id)
    }

    return (
        <li className="list-item">
            <span>{task.content}</span>
            <div>
                <button onClick={() => deleteTodo(task.id)} className="btn-delete task-btn">
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    )
}

export default Task
