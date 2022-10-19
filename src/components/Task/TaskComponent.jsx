import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class.js";

import './taskComponent.css';

const TaskComponent = ({task, complete, remove}) => {

    const changeState = () => {
        if (task.conected) {
            return(<i onClick={() => complete(task)} className='bi bi-toggle2-off task-action'></i>)
        } else {
            return(<i onClick={() => complete(task)} className='bi bi-toggle2-on task-action'></i>)
        }
    }

    return (
        <tr className='fw-normal'>
            <td className='mx-2'>
                <span className='ms-2'>{task.name}</span>
            </td>
            <td className='align-middle'>
                <span>{task.lastName}</span>
            </td>
            <td className='align-middle'>
                <span>{task.userName}</span>
            </td>
            <td className='align-middle'>
                {changeState()}
                <i onClick={() => remove(task)} className='bi bi-trash3 task-action'></i>
            </td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    complete: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
}

export default TaskComponent;
