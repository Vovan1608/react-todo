import React, { useState } from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, onDeleted, isDone, isImportant, onToggleImportant, onToggleDone }) => {
    let classNames = 'todo-list-item d-flex';

    if (isDone) {
        classNames += ' done';
    }

    if (isImportant) {
        classNames += ' important';
    }

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onToggleDone}
            >
                {label}
            </span>

            <span className='d-flex justify-content-end'>
                <button type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={onToggleImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button type="button"
                    className="btn btn-outline-danger btn-sm"
                    onClick={onDeleted}
                >
                    <i className="bi bi-trash3"></i>
                </button>
            </span>
        </span>
    );
};

export default TodoListItem;
