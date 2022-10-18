import React from 'react';
import PropTypes from 'prop-types';
import { Task } from "../../models/task.class.js";

const TaskComponent = ({task}) => {
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
                <span>{task.conected ? "Yes" : "No"}</span>
            </td>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;
