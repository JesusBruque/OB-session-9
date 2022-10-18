import React, { useState, useEffect } from 'react';
import TaskComponent from '../Task/TaskComponent.jsx';
import { Task } from "../../models/task.class.js";

import "./taskList.css";

const TaskList = () => {

    const defaultTask1 = new Task('Jesús', 'Bruque', 'bruke3', true);
    const defaultTask2 = new Task('Alba', 'Molina', 'aMolina', false);
    const defaultTask3 = new Task('Sergio', 'Bruque', 'sergi1', true);

    const [tasks, setTasks] = useState([defaultTask1, defaultTask2, defaultTask3]);

    useEffect(() => {
    }, []);

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
                                ></TaskComponent>
                            )
                            
                        })}
                        {/* <TaskComponent task={defaultTask1}></TaskComponent> */}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
}



export default TaskList;
