import React, { Component } from "react";

export default class TodoItem extends Component {
  render() {
    return (
      <div className="border-b border-gray-200 py-4 px-8">
        <div className="relative hover-trigger">
          <label className="inline-flex items-center mt-3 ">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-red-600 bg-red-300"
              onChange={() => this.props.check(this.props.index)}
              checked={this.props.item.isChecked}
            />
            <span
              className={`ml-6 ${
                this.props.item.isChecked
                  ? "line-through text-gray-400"
                  : "text-gray-500"
              }`}
            >
              {this.props.item.content}
            </span>
          </label>
          <button
            className="absolute bg-white px-2 py-2 bottom-0 right-0 hover-target rounded focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => this.props.remove(this.props.index)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className=" text-gray-500 h-5 w-5 hover:text-red-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
              />
            </svg>
          </button>
        </div>
      </div>
    );
  }
}
