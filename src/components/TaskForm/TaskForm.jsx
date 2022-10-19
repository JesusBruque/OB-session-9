import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Task } from '../../models/task.class.js';


const TaskForm = ({add}) => {

    const nameRef = useRef('')
    const lastNameRef = useRef('')
    const userNameRef = useRef('')

    const addTask = (e) => {
        e.preventDefault();
        const newTask = new Task(
            nameRef.current.value,
            lastNameRef.current.value,
            userNameRef.current.value,
            false
        )
        add(newTask);
    }

    return (
        <form onSubmit={addTask} className='d-flex justify-content-center align-items-center m4-4'>
            <div className='form-outline flex-fill'>
                <input className='form-control form-control-lg m-1' autoFocus required placeholder='Name' type='text' ref={nameRef} id='inputName' />
                <input className='form-control form-control-lg m-1' autoFocus required placeholder='Last Name' type='text' ref={lastNameRef} id='inputLastName' />
                <input className='form-control form-control-lg m-1' autoFocus required placeholder='Username' type='text' ref={userNameRef} id='inputUsername' />
            </div>
            <button type='submit' className='btn btn-primary btn-lg d-flex justify-content-center align-items-center m-4'>Submit</button>
        </form>
    );
};


TaskForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default TaskForm;

