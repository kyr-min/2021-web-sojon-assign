import React from "react";
import TodoItem from "./TodoItem";
import currDate from "./date"
import CompleteCnt from "./CompleteItems";

interface TodoAppProps { }
interface TodoAppState {
  todoItems: string[];
  newTodo: string;
  completed: number;
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
      completed: 0
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
    if(this.state.newTodo.length !== 0){
      this.setState({
        todoItems: items,
        newTodo: "",
      })
    }
  }

  handleDelete = (whereComplete: TodoAppIndivIdx)=> {
    const copyofCurrentState = this.state.todoItems;
    copyofCurrentState.splice(whereComplete.idx, 1);

    this.setState({
      todoItems: copyofCurrentState
    })
  }

  handleComplete = (whereComplete: TodoAppIndivIdx) => {
    const liElement= document.getElementById(whereComplete.idx.toString());
    if(liElement) {
      liElement.setAttribute("class", "completed"); 
    }
    this.setState({
      completed: this.state.completed + 1
    })
  }

  



  render() {
    return (
      <div>
        <h1>TODO</h1>
        <ol>
          {
            this.state.todoItems.map((item, idx) => (
              <li>
                <p id={idx.toString()}><TodoItem name={item} key={idx}/></p>
                <button onClick={() => this.handleComplete({idx})}>완료</button>
                <button onClick={() => this.handleDelete({idx})}>삭제</button>
              </li>
            ))
          }
        </ol>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="new-todo">뭘 해야하나요?🤔</label> <br />
          <input type="text" id="new-todo" value={this.state.newTodo} onChange={this.handleNewTodo} /> <br />
          <button>Add #{this.state.todoItems.length + 1}</button>
        </form>
        <p>{currDate}</p>
        <CompleteCnt count={this.state.completed}/>
      </div>
    )
  }
}

export default TodoApp;