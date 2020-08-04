import React, { createContext, useState, useEffect } from 'react'

export const TaskListContext = createContext()

const TaskListContextProvider = (props) => {

    var localTask = localStorage.getItem("tasks");
    const intialTask = JSON.parse(localTask) || []
    const [tasks, setTasks] = useState(intialTask)
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks))
    }, [tasks])

    const addTask = title => {
        setTasks([...tasks, { id: Math.random(), content: title }])
    }

    const deleteTask = id => {
        setTasks(tasks.filter(task => task.id != id))
    }


    return (
        <TaskListContext.Provider value={{
            tasks, addTask, deleteTask
        }}>
            {props.children}
        </TaskListContext.Provider>
    )
}

export default TaskListContextProvider
