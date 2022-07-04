import React from 'react';

import './ItemAddForm.css';

const ItemAddForm = ({ onItemAdd }) => {
    return (
        <div className='item-add-form'>
            <button
                className='btn btn-outline-secondary'
                onClick={() => onItemAdd('Hello, bro!')}
            >
                Add Item
            </button>
        </div>
    );
};

export default ItemAddForm;
