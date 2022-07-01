import { createRoot } from 'react-dom/client';

import AppHeader from './components/AppHeader';
import SearchPannel from './components/SearchPannel';
import TodoList from './components/TodoList';
import ItemStatusFilter from './components/ItemStatusFilter';

const container = document.getElementById('app');
const root = createRoot(container);

const App = () => {
    const todoData = [
        { label: 'Work out', isImportant: true, id: 1 },
        { label: 'Running', isImportant: true, id: 2 },
        { label: 'Launch', isImportant: false, id: 3 }
    ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPannel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={todoData} />
        </div>
    );
};

root.render(<App />);
