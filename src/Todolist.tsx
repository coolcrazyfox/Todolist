import React from "react";
import {FilterValuesType, TaskType} from "./App"
type PropsType ={
    title: string
    task: Array<TaskType>
    removeTask: (taskID: number) => void
    changeFilter:(filter:FilterValuesType)=> void
}
    
function Todolist(props: PropsType){
    const taskJSX = props.task.map(t=> {
        return(
            <li key={t.id}>
                <input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={()=>props.removeTask(t.id)}>Delete</button>
            </li>
        )
    })
    return(
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {taskJSX}
                {/* <li>
                    <input type="checkbox" checked={props.task[1].isDone}/>
                    <span>{props.task[1].title}</span>
                </li>
                <li>
                    <input type="checkbox" checked={props.task[2].isDone}/>
                    <span>{props.task[2].title}</span>
                </li>*/}
            </ul>
            <div>
                <button onClick={()=> props.changeFilter("all")}>All</button>
                <button onClick={()=> props.changeFilter("active")}>Active</button>
                <button onClick={()=> props.changeFilter("completed")}>Completed</button>
            </div>
        </div>
    )
}
export  default Todolist;
