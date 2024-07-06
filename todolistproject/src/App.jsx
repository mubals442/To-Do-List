//(c) Musab Alsayed / MID-END

import React, { useEffect, useState } from 'react';
import NewTodoForm from './NewTodoForm';
import TodoList from './TodoList';
import './App.css'; 

function App() {
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if (localValue == null) return []

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos(currentTodos => {
      return [
        ...currentTodos,
        {
          id: crypto.randomUUID(),
          title,
          completed: false,
        },
      ];
    });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id);
    });
  }

  return (
    <div className="todo-app">
        <h1 className="header">Todo App</h1>
      <NewTodoForm onSubmit={addTodo} />
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
      />
      <div className="footer">
        You have {todos.length} pending tasks
        <button className="clear-all" onClick={() => setTodos([])}>
          Clear All
        </button>  
      </div>
    </div>
  );
}

export default App;

