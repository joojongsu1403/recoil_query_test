import React from "react";

function TodoComponent(props) {
  let item = props.data;
  return (
    <div>
      <input
        type="text"
        value={item ? item.text : ""}
        // onChange={editItemText}
        readOnly
      />
      <input
        type="checkbox"
        checked={item ? item.isComplete : false}
        // onChange={toggleItemCompletion}
        readOnly
      />
      <button
      //   onClick={deleteItem}
      >
        X
      </button>
    </div>
  );
}

export default TodoComponent;
