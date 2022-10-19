import React, { useState, useEffect } from 'react';

//Import Components
import TaskComponent from '../Task/TaskComponent.jsx';
import TaskForm from '../TaskForm/TaskForm.jsx';

//Import Class
import { Task } from "../../models/task.class.js";

//Import Styles
import "./taskList.css";

const TaskList = () => {

    const defaultTask1 = new Task('Jesús', 'Bruque', 'bruke3', true);
    const defaultTask2 = new Task('Alba', 'Molina', 'aMolina', false);
    const defaultTask3 = new Task('Sergio', 'Bruque', 'sergi1', true);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    const completeTask = (task) => {
        console.log("Complete this task", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask[index].conected = !tempTask[index].conected;
        setTasks(tempTask);
    }

    const deleteContact = (task) => {
        console.log("Contact delete", task);
        const index = tasks.indexOf(task);
        const tempTask = [...tasks];
        tempTask.splice(index, 1);
        setTasks(tempTask);

    }

    const addTask = (task) => {
        console.log("Contact add", task);
        const tempTask = [...tasks];
        tempTask.push(task);
        setTasks(tempTask);
    }

    useEffect(() => {
    }, [tasks]);

    return (
        <div className="card">
            <div className="card-header">
                Contact List
            </div>
            <div className="card-body">
                <table>
                    <thead>
                        <tr>
                            <th scope='col'>Name</th>
                            <th scope='col'>Last Name</th>
                            <th scope='col'>UserName</th>
                            <th scope='col'>Conected</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task, index) => {
                            return (
                                <TaskComponent 
                                    key={index}
                                    task={task}
                                    complete={completeTask}
                                    remove={deleteContact}  
                                />
                            )
                            
                        })}
                    </tbody>
                </table>
            </div>
            <TaskForm add={addTask}/>
        </div>
    );
}



export default TaskList;
