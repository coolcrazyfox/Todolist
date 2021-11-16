import React, {useState} from 'react';
import './App.css';
import Todolist from "./Todolist";
import {Tolist} from "./Tolist";

export  type TaskType ={
    id: number
    title: string
    isDone:boolean
}

export  type FilterValuesType="all"|"active"|"completed"

function App() {
    //const toList="Books that I know"
    const [tasks, setTasks]=useState<Array<TaskType>>([
                    {id: 1, title: "HTML", isDone: true},
                    {id: 2, title: "CSS", isDone: true},
                    {id: 3, title: "JS", isDone: false}
                ])
    const[filter, setFilter]=useState<FilterValuesType>("completed")
    const changeFilter = (filter:FilterValuesType) => {
        setFilter(filter)


    }
    //const tasks= result[0]
    //const setTasks= result[1]

    /*let tasks: Array<TaskType> =[
        {id: 1, title: "HTML", isDone: true},
        {id: 2, title: "CSS", isDone: true},
        {id: 3, title: "JS", isDone: false}

    ]*/
    const removeTask =(taskID: number)=>{
        setTasks(tasks.filter(t=> t.id !== taskID))
    }
    let tasksForRender = tasks
    if(filter === "active") {
        tasksForRender = tasks.filter(i=> i.isDone === false)
    }
    if(filter === "completed") {
        tasksForRender = tasks.filter(i=> i.isDone === true)
    }
    /*const task_2: Array<TaskType> =[
        {id: 4, title: "VODKA", isDone: true},
        {id: 5, title: "Beer", isDone: true},
        {id: 6, title: "Champagne", isDone: true}
    ]
    const task_3: Array<TaskType> =[
        {id: 7, title: "Alphabet", isDone: false},
        {id: 8, title: "Is there life on Mars...?", isDone: true}
    ]*/
    return (
        <div className="App">
            <Todolist title={"What to learn"}
                      task={tasksForRender}
                      removeTask={removeTask}
                      changeFilter={changeFilter}/>
            {/*<Todolist title={"What to buy"} task={task_2}/>
            <Tolist title={toList} task={task_3}/>*/}
        </div>
    );
}

export default App;
