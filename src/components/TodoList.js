import React, { Component } from "react";
import TodoItem from "./TodoItem";
export default class TodoList extends Component {
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
