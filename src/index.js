import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const TodoList = () => {
    const items = ['Learn React', 'Make awasome app'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const AppHeader = () => {
    return (
        <h1> My ToDo List</h1>
    );
};

const SearchPannel = () => {
    const tipeSearch = 'Tipe here to search';

    const searchStyle = {
        fontSize: '25px'
    }

    return (
        <input
            style={searchStyle}
            placeholder={tipeSearch}
            disabled
        />
    );
};

const App = () => {
    const valee = '<script>alert("This is going very poorly")</script>';

    return (
        <>
            <div>{valee}</div>
            <AppHeader />
            <SearchPannel />
            <TodoList />
        </>
    );

};

root.render(<App />);
