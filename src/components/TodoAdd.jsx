import React, { useState, useEffect } from 'react';
import './TodoAdd.css'; // CSS dosyasını import edeceğiz

const TodoAdd = () => {
  const [todoadd, setTodoAdd] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [filter, setFilter] = useState('all'); // Yeni state: filtreleme için

  // todoList değiştiğinde localStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  // Farklı sekmelerde senkronizasyon için
  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === 'todos') {
        setTodoList(JSON.parse(e.newValue) || []);
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

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

  const clearAllTodos = () => {
    if (window.confirm('Are you sure you want to delete all tasks?')) {
      setTodoList([]);
    }
  }

  const filteredTodos = todoList.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className="todo-container">
      <h2 className="todo-title">✨ Todo List</h2>
      <div className="input-container">
        <input 
          value={todoadd}
          onChange={UpdateTodo}
          onKeyPress={handleKeyPress}
          type="text"
          placeholder="Add new task..."
          className="todo-input"
        />
        <button onClick={AddNewTodo} className="add-button">
          Add
        </button>
      </div>

      {todoList.length > 0 && (
        <div className="filters">
          <button 
            className={`filter-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-button ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button 
            className={`filter-button ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
          <button 
            className="clear-all-button"
            onClick={clearAllTodos}
          >
            Clear All
          </button>
        </div>
      )}

      <div className="todo-list">
        {filteredTodos.length === 0 ? (
          <p className="empty-message">
            {filter === 'all' 
              ? 'No tasks added yet!' 
              : filter === 'active'
              ? 'No active tasks!'
              : 'No completed tasks!'}
          </p>
        ) : (
          filteredTodos.map((todo) => (
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
          ))
        )}
      </div>
    </div>
  );
};

export default TodoAdd;
