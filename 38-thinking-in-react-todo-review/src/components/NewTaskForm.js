import React from "react";
import { CATEGORIES } from "../data";

// App
// NewTaskForm receives { addTask } as prop

class NewTaskForm extends React.Component {
  state = {
    text: "",
    category: CATEGORIES[1]
  };

  submitForm = e => {
    e.preventDefault();
    this.props.addTask(this.state.text, this.state.category);
  };

  handleTextChange = e => this.setState({ text: e.target.value });

  handleCategoryChange = e => this.setState({ category: e.target.value });

  render() {
    return (
      <form onSubmit={this.submitForm} className="new-task-form">
        <input
          type="text"
          onChange={this.handleTextChange}
          value={this.state.text}
          placeholder="New task details"
        />
        <select
          value={this.state.category}
          onChange={this.handleCategoryChange}
        >
          {CATEGORIES.filter(c => c !== "All").map(category => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="submit" />
      </form>
    );
  }
}

export default NewTaskForm;
