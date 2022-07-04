import React from 'react';

import './ItemStatusFilter.css';

const ItemStatusFilter = ({ filter, onFilterChange }) => {
    const buttonsData = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
    ];

    const buttons = buttonsData.map(({ name, label }) => {
        const isActive = filter === name;
        const clazz = isActive ? 'btn-info' : 'btn-outline-secondary';

        return (
            <button
                key={name}
                type="button"
                className={`btn ${clazz}`}
                onClick={() => onFilterChange(name)}
            >
                {label}
            </button>
        );
    });

    return (
        <div className="btn-group">
            {buttons}
        </div>
    );
};

export default ItemStatusFilter;
