import React from 'react';
import './App.css';
import TaskList from './components/TaskList'
import TaskListContextProvider from "./context/TaskListContext";
import Header from './components/Header'
import AddTask from './components/AddTask'

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className="app-wrapper">
          <Header/>
          <div className="main">
            <AddTask/>
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
