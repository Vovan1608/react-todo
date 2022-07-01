import React, { useState } from 'react';

import './TodoListItem.css';

const TodoListItem = ({ label, onDeleted }) => {
    const [isDone, setIsDone] = useState(false);
    const [isImportant, setIsImportant] = useState(false);

    let classNames = 'todo-list-item d-flex';

    if (isDone) {
        classNames += ' done';
    }

    if (isImportant) {
        classNames += ' important';
    }

    const onLabelClick = () => {
        setIsDone(!isDone);
    }

    const onMarkImportant = () => {
        setIsImportant(!isImportant);
    }

    return (
        <span className={classNames}>
            <span
                className="todo-list-item-label"
                onClick={onLabelClick}
            >
                {label}
            </span>

            <span className='d-flex justify-content-end'>
                <button type="button"
                    className="btn btn-outline-success btn-sm"
                    onClick={onMarkImportant}
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
