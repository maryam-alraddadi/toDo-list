import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
  }

  // componentDidMount() {
  //   var storedItems = JSON.parse(localStorage.getItem("TodoList"));
  //   console.log(storedItems);
  //   this.setState({ items: storedItems });
  //   // //if (Array.isArray(this.state.items)) return "results are not array";
  //   // console.log(storedItems);
  //   // console.log(this.state.items);
  //   // this.setState({ items: storedItems });
  //   // if (storageItems.length > 0) {
  //   // } else {
  //   // }
  // }

  render() {
    return (
      <div className="overflow-auto h-full">
        {this.props.items.map((item, index) => {
          return (
            <TodoItem
              key={index}
              index={index}
              item={item}
              remove={this.props.remove}
              check={this.props.check}
            />
          );
        })}
      </div>
    );
  }
}
