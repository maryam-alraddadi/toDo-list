import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [], inputValue: "" };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputSubmit = this.handleInputSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  handleInputChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleInputSubmit(event) {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        { content: this.state.inputValue, isChecked: false },
      ],
    });
    this.setState({ inputValue: "" });
    event.preventDefault();
  }

  removeItem(index) {
    var items = [...this.state.todoItems];
    items.splice(index, 1);
    this.setState({
      todoItems: items,
    });
  }

  checkItem(index) {
    var items = [...this.state.todoItems];
    items[index].isChecked = !items[index].isChecked;
    this.setState({ todoItems: items });
  }

  componentDidMount() {
    var storedItems = JSON.parse(localStorage.getItem("TodoList"));
    if (storedItems) {
      this.setState({ todoItems: storedItems });
    }
  }

  componentDidUpdate() {
    localStorage.setItem("TodoList", JSON.stringify(this.state.todoItems));
  }

  render() {
    return (
      <div className="flex items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <button
          className="absolute top-6 right-8 bg-transparent text-white opacity-50 font-light py-2 px-4 border rounded-md border-grey hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          onClick={() => this.setState({ todoItems: [] })}
        >
          Clear all
        </button>
        <div className="container max-w-2xl mx-auto border  border-gray-300 rounded-lg">
          <Header todosCount={this.state.todoItems.length} />
          <div className="max-w-2xl h-96 mx-auto bg-white">
            <TodoList
              items={this.state.todoItems}
              remove={this.removeItem}
              check={this.checkItem}
            ></TodoList>
          </div>
          <div className="max-w-2xl h-24 mx-auto rounded-b bg-gray-100">
            <form onSubmit={this.handleInputSubmit}>
              <div className="flex items-center mx-auto px-8 pt-6">
                <input
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.handleInputChange}
                  placeholder="add new todo"
                  className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                />
                <button
                  type="submit"
                  className="inline-block ml-2 p-3 text-center text-white  bg-orange-500 rounded-full shadow hover:shadow-lg focus:outline-none"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
