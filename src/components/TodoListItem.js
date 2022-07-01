import React from 'react';

const TodoListItem = ({ label, isImportant = false }) => {
    const style = {
        color: isImportant ? 'tomato' : 'black'
    }

    return (
        <span style={style}>{label}</span>
    );
};

export default TodoListItem;
