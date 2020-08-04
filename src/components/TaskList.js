import React, { useContext, useState, useEffect } from 'react'
import { TaskListContext } from '../context/TaskListContext'
import Task from './Task'

const TaskList = () => {

    const { tasks } = useContext(TaskListContext);

    return (
        <div>
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => {
                        return <Task task={task} key={task.id}></Task>;
                    })}
                </ul>
            ) : (
                    <div className="no-tasks"> NO TASKS </div>
                )}
        </div>
    );
};

export default TaskList
