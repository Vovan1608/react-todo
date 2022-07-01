import React from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, isImportant = false }) => {
    const style = {
        color: isImportant ? 'tomato' : 'black'
    }


    return (
        <span className="todo-list-item d-flex">
            <span
                className="todo-list-item-label"
                style={style}
            >
                {label}
            </span>

            <span className='d-flex justify-content-end'>
                <button type="button"
                    className="btn btn-outline-success btn-sm">
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm">
                    <i className="bi bi-trash3"></i>
                </button>
            </span>
        </span>
    );
};

export default TodoListItem;
