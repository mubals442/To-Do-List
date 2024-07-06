//(c) Musab Alsayed / MID-END

import React, { useState } from 'react';

function NewTodoForm( props ) {
  const [newItem, setNewItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (newItem === "") return;

    props.onSubmit(newItem);

    setNewItem("");
  }

  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <input
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          type="text"
          id="item"
          placeholder="Add your new todo"
        />
        <button className="btn add-btn">
        <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="currentColor" d="M20 14h-6v6h-4v-6H4v-4h6V4h4v6h6z"></path></svg> 
        </button>
      </div>
    </form>
  );
}

export default NewTodoForm;

