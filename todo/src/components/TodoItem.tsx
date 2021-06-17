import React from "react";

interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  return(
    <p>{props.name}</p>
  )
}

export default TodoItem;