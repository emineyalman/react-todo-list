import React, { useState } from 'react';
import './TodoAdd.css'; // CSS dosyasını import edeceğiz

const TodoAdd = () => {
  const [todoadd, setTodoAdd] = useState("");
  const [todoList, setTodoList] = useState([]);

  const UpdateTodo = (e) => {
    setTodoAdd(e.target.value);
  }

  const AddNewTodo = () => {
    if (todoadd.trim() !== "") {
      setTodoList(prev => ([...prev, { id: Date.now(), text: todoadd, completed: false }]));
      setTodoAdd("");
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      AddNewTodo();
    }
  }

  const toggleComplete = (id) => {
    setTodoList(prev => 
      prev.map(todo => 
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }

  const deleteTodo = (id) => {
    setTodoList(prev => prev.filter(todo => todo.id !== id));
  }

  return (
    <div className="todo-container">
      <h2 className="todo-title">✨ Todo List</h2>
      <div className="input-container">
        <input 
          value={todoadd}
          onChange={UpdateTodo}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Yeni görev ekle..."
          className="todo-input"
        />
        <button onClick={AddNewTodo} className="add-button">
          Ekle
        </button>
      </div>

      <div className="todo-list">
        {todoList.map((todo) => (
          <div key={todo.id} className="todo-item">
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
              className="todo-checkbox"
            />
            <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
              {todo.text}
            </span>
            <button 
              onClick={() => deleteTodo(todo.id)}
              className="delete-button"
            >
              🗑️
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoAdd;
