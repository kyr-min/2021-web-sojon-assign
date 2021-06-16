import React from "react";
import TodoItem from "./components/TodoItem";

interface TodoAppProps { }
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
}
interface TodoAppIndivIdx {
  idx: number;
}

class TodoApp extends React.Component<TodoAppProps, TodoAppState> {
  constructor(props: TodoAppProps) {
    super(props);

    this.state = {
      todoItems: [],
      newTodo: "",
    };
  }

  handleNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.target.value,
    });
  }

  handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const items = this.state.todoItems.concat(this.state.newTodo)

    this.setState({
      todoItems: items,
      newTodo: "",
    })
  }

  handleComplete = (whereComplete: TodoAppIndivIdx)=> {
    const copyofCurrentState = this.state.todoItems;
    copyofCurrentState.splice(whereComplete.idx, 1);

    this.setState({
      todoItems: copyofCurrentState
    })
  }

  render() {
    return (
      <div>
        <h3>TODO</h3>
        <ol>
          {
            this.state.todoItems.map((item, idx) => (
              <div>
                <TodoItem name={item} key={idx}/>
                <button onClick={() => this.handleComplete({idx})}>완료</button>
              </div>
            ))
          }
        </ol>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">뭘 해야하나요?</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>Add #{this.state.todoItems.length + 1}</button>
        </form>
      </div>
    )
  }
}

export default TodoApp;