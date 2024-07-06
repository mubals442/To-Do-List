//(c) Musab Alsayed / MID-END

import React from 'react';

function TodoItem({ completed, id, title, toggleTodo, deleteTodo }) {
  return (
    <li className="todo-item">
      <label className="todo-label">
        <input
          type="checkbox"
          checked={completed}
          onChange={e => toggleTodo(id, e.target.checked)}
        />
        {title}
      </label>
      
        <button
          onClick={() => deleteTodo(id)}
          className="btn btn-danger"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
            <path fill="currentColor" d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"></path>
          </svg>  
        </button>
    </li>
  );
}

export default TodoItem;




