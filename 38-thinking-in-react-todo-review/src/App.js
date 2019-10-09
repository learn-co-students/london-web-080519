import React from "react";
import "./App.css";
import { CATEGORIES } from "./data";
import CategoryFilters from "./components/CategoryFilters";
import TaskList from "./components/TaskList";
import NewTaskForm from "./components/NewTaskForm";

class App extends React.Component {
  state = {
    currentCategory: CATEGORIES[0],
    tasks: [
      {
        text: "Buy rice",
        category: "Food"
      },
      {
        text: "Save a tenner",
        category: "Money"
      },
      {
        text: "Build a todo app",
        category: "Code"
      },
      {
        text: "Build todo API",
        category: "Code"
      },
      {
        text: "Get an ISA",
        category: "Money"
      },
      {
        text: "Cook rice",
        category: "Food"
      },
      {
        text: "Tidy house",
        category: "Misc"
      }
    ]
  };

  // called from CategoryFilters
  changeCategory = selectedCategory => {
    this.setState({
      currentCategory: selectedCategory
    });
  };

  // called in render of App
  filterTasks = () =>
    this.state.tasks.filter(
      task =>
        this.state.currentCategory === CATEGORIES[0] ||
        task.category === this.state.currentCategory
    );

  // called from NewTaskForm
  addTask = (text, category) => {
    this.setState({
      tasks: [...this.state.tasks, { text, category }]
    });
  };

  // called from TaskList (creating inline functions, passing them to Task)
  deleteTask = task => {
    this.setState({
      tasks: this.state.tasks.filter(t => {
        return !(t.text === task.text && t.category === task.category);
      })
    });
  };

  render() {
    const filteredTasks = this.filterTasks();

    return (
      <div className="App">
        <h2>My tasks</h2>
        <CategoryFilters
          currentCategory={this.state.currentCategory}
          changeCategory={this.changeCategory}
        />
        <NewTaskForm addTask={this.addTask} />
        <TaskList tasks={filteredTasks} deleteTask={this.deleteTask} />
      </div>
    );
  }
}

export default App;
