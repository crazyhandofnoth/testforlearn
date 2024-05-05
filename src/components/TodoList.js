import React from 'react';
import { Button, Input, List } from 'antd';
import { atom, useAtom } from 'jotai';
const todosAtom = atom([])
const newTodoAtom = atom('')
function TodoList() {
    const [todos, setTodos] = useAtom(todosAtom);
    const [newTodo, setNewTodo] = useAtom(newTodoAtom);

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
            <Input
                style={{ height: 35, width: '320px', marginRight: '10px', marginBottom: '10px' }}
                type="text" value={newTodo} onChange={handleInputChange} onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        addTodo();
                    }
                }} />
            <Button
                onClick={addTodo}

            >Add Todo</Button>











            <List
                // header={<div>Header</div>}
                // footer={<div>Footer</div>}
                bordered
                dataSource={todos}
                renderItem={(item, index) => (
                    <List.Item key={index} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '5px' }}>

                        <span
                            style={{ textDecoration: item.completed ? 'line-through' : 'none' }}
                            onClick={() => toggleTodo(index)}

                        >
                            {item.text}
                        </span>
                        <Button onClick={() => removeTodo(index)}>Remove</Button>
                    </List.Item>
                )
                }
                style={{ width: '320px' }}

            />







        </div >
    );
}

export default TodoList;