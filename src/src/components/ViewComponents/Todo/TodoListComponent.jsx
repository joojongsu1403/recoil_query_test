import React, { useState } from "react";
import TodoComponent from "../../AtomComponents/Todo/TodoComponent";
import TodoItemCreator from "../../AtomComponents/Todo/TodoItemCreator";

function TodoListComponent(props) {
  const [inputValue, setInputValue] = useState("");

  const addItem = () => {
    props.addItem(inputValue);
    setInputValue("");
  };

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <>
      <TodoItemCreator
        addItem={addItem}
        onChange={onChange}
        inputValue={inputValue}
      />
      {props.setTodoList.map((data, index) => (
        <TodoComponent data={data} key={index} />
      ))}
    </>
  );
}

export default TodoListComponent;
