import React, { useState } from "react";

function TodoItemCreator(props) {
  return (
    <div>
      <input type="text" value={props.inputValue} onChange={props.onChange} />
      <button onClick={props.addItem}>Add</button>
    </div>
  );
}

export default TodoItemCreator;
