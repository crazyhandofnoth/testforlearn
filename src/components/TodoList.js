import React, { useState } from 'react';
import { Button, Input } from 'antd';
function App() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    const handleInputChange = (e) => {
        setNewTodo(e.target.value);
    };

    const addTodo = () => {

        if (newTodo.trim()) {
            setTodos([...todos, { text: newTodo, completed: false }]);
            setNewTodo('');
        }
    };

    const toggleTodo = (index) => {

        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);

        console.log(todos)

    };

    const removeTodo = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);

        console.log(todos)
    };

    return (
        <div>
            <h1>Todo List</h1>
            <Input type="text" value={newTodo} onChange={handleInputChange} onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    addTodo();
                }
            }} />
            <Button
                onClick={addTodo}

            >Add Todo</Button>
            <ul >
                {todos.map((todo, index) => (
                    <li key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>



                        <span
                            style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleTodo(index)}

                        >
                            {todo.text}
                        </span>
                        <Button onClick={() => removeTodo(index)}>Remove</Button>
                    </li>
                ))}
            </ul>
        </div >
    );
}

export default App;