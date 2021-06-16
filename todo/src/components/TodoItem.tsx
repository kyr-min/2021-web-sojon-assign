import React from "react";

interface TodoItemProps {
  name: string;
}

function TodoItem(props: TodoItemProps) {
  return(
    <li className="todoItems">{props.name}&nbsp;&nbsp;&nbsp;&nbsp;</li>
  )
}

export default TodoItem;