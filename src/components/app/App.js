import { useState } from 'react';

import TodoList from '../todoList';
import AppHeader from '../appHeader';
import SearchPanel from '../searchPanel';
import ItemAddForm from '../itemAddForm';
import ItemStatusFilter from '../itemStatusFilter';

import './App.css';

const App = () => {
    const createItem = (label) => {
        return {
            label,
            isDone: false,
            isImportant: false,
            id: new Date().getTime() + label
        };
    };

    const todoData = [
        createItem('Work out'),
        createItem('Running'),
        createItem('Launch')
    ];

    const [data, setData] = useState(todoData);

    const deleteItem = (id) => {
        setData(data.filter((el) => el.id !== id));
    };

    const addItem = (item) => {
        const newItem = createItem(item);

        setData([...data, newItem]);
    };

    const togglePropperty = (arr, id, propName) => {
        const index = arr.findIndex((el) => el.id === id);
        const oldItem = data[index];

        oldItem[propName] = !oldItem[propName];

        setData([...arr]);
    };

    const onToggleImportant = (id) => {
        togglePropperty(data, id, 'isImportant');
    };

    const onToggleDone = (id) => {
        togglePropperty(data, id, 'isDone');
    };

    const doneCount = data.filter((el) => el.isDone).length;

    const todoCount = data.length - doneCount;

    return (
        <div className="todo-app">
            <AppHeader todo={todoCount} done={doneCount} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList
                todos={data}
                onDeleted={deleteItem}
                onToggleImportant={onToggleImportant}
                onToggleDone={onToggleDone}
            />
            <ItemAddForm onItemAdd={addItem} />
        </div>
    );
};

export default App;