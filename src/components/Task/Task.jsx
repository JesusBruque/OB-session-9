import React from 'react';
import PropTypes from 'prop-types';
import {Task} from "../../models/task.class";

const TaskComponent = ({task}) => {
    return (
        <tr>
            <th>
                <span>{task.name}</span>
            </th>
            <th>
                <span>{task.lastName}</span>
            </th>
            <th>
                <span>{task.userName}</span>
            </th>
            <th>
                <span>{task.conected ? "Conected" : "Disconected"}</span>
            </th>
        </tr>
    );
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent;
