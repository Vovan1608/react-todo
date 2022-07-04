import React, { useState } from 'react';

import './ItemAddForm.css';

const ItemAddForm = ({ onItemAdd }) => {
    const [label, setLabel] = useState('');

    const onLabelChange = (e) => {
        setLabel(e.target.value);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        onItemAdd(label);
        setLabel('');
    };

    return (
        <form
            className='item-add-form d-flex'
            onSubmit={onSubmit}
        >
            <input
                type='text'
                value={label}
                className='form-control'
                onChange={onLabelChange}
                placeholder='What need to be done'
            />
            <button
                className='btn btn-outline-secondary'
            >
                Add Item
            </button>
        </form>
    );
};

export default ItemAddForm;
