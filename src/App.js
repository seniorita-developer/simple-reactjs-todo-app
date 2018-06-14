import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      addClass: false
    };
  };

  addTask() {
    let todos = [...this.state.todos];
    if (this.newText.value !== "") {
      todos.push(this.newText.value);
    }
    console.log("Here new todos " + todos);
    this.setState({ todos });
  };

  removeTask(task_id) {
    console.log("Task id " + task_id)
    let todos = [...this.state.todos];
    todos.splice(task_id, 1);
    this.setState({ todos })
  };

  handleComplete(task_id) {
    this.setState({addClass: !this.state.addClass})
  }

  render() {
    let todoStyleClass = ["todo"];

    if(this.state.addClass) {
      todoStyleClass.push('done');
    }
    let { todos } = this.state;
    console.log("todos" + todos);
    let info_text;
    if(this.state.todos.length===0){
      info_text = "Your TODO list is empty" 
    };
    
    return (
      <div className="container">
        <div className="jumbotron">
          <h1> TODO List</h1>
          <input type="text" ref={task => { this.newText = task }} />
          <button onClick={this.addTask.bind(this)} className="btn">Add
              </button>
        </div>
          <h2>My TODOS</h2>
          <p>{info_text}</p>
          <ol>
            {this.state.todos.map(function (todo, task_id) {
              return <li key={task_id} className={ todoStyleClass.join(' ') }>{todo}
                      
                      <button onClick={this.handleComplete.bind(this, task_id)}
                      type="button" className="btn btn-default btn-sm">
                      <i className="fa fa-check-circle-o"></i> Mark as complete</button>

                      <button onClick={this.removeTask.bind(this, task_id)} 
                      type="button" className="btn btn-default btn-sm">
                      <i className="fa fa-trash"></i> Remove</button>
                    </li>
            }.bind(this))}

          </ol>
        </div>
    )
  };
}

export default App;