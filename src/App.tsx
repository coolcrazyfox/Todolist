import React from 'react';
import './App.css';
import Todolist from "./Todolist";

export  type TaskType ={
    id: number
    title: string
    isDone:boolean
}
function App() {
    const task_1: Array<TaskType> =[
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: false}

    ]
    const task_2: Array<TaskType> =[
        {id: 4, title: "VODKA", isDone: true},
        {id: 5, title: "Beer", isDone: true},
        {id: 6, title: "Shampan", isDone: false}

    ]
    return (
        <div className="App">
            <Todolist title={"What to learn"} task={task_1}/>
            <Todolist title={"What to buy"} task={task_2}/>            
        </div>
    );
}

export default App;
