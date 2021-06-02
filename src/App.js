import React, { Component } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { todoItems: [], inputValue: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.checkItem = this.checkItem.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  handleSubmit(event) {
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
    // chenge val of is done inside array
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
        <button onClick={(e) => this.setState({ todoItems: [] })}>
          clear list
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
          <div className="max-w-2xl h-24 mx-auto border-b rounded border-gray-100 bg-gray-100">
            {/* <form onSubmit={this.handleSubmit}>
              <label>
                Todo:
                <input
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                />
              </label>
              <input type="submit" value="Submit" />
            </form> */}

            <form onSubmit={this.handleSubmit}>
              <div className="flex items-center mx-auto px-8 pt-6">
                <input
                  type="text"
                  value={this.state.inputValue}
                  onChange={this.handleChange}
                  placeholder="add new todo"
                  className="flex-1 appearance-none rounded shadow p-3 text-grey-dark mr-2 focus:outline-none"
                />
                {/* <button
                  type="submit"
                  className="bg-blue-600 text-white text-base font-semibold rounded-md shadow-md hover:bg-indigo-600 p-3"
                ></button> */}
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
