import React, { Component } from "react";

export default class Header extends Component {
  getCurrentDay() {
    let today = new Date();
    // return (
    //   today.toLocaleString("en-us", { weekday: "long" }) +
    //   ", " +
    //   today.getUTCDate() +
    //   "nd"
    // );
    return today.toLocaleString("en-us", { weekday: "long" }) + ", ";
  }

  getCurrentMonth() {
    let today = new Date();
    return today.toLocaleString("default", { month: "long" });
  }

  render() {
    return (
      <div className="max-w-2xl h-24 mx-auto px-8 py-6 border-t rounded border-gray-50 bg-gray-50">
        <div className="flex">
          <div className="flex-1">
            <p className="text-xl font-semibold inline text-violet-500">
              {this.getCurrentDay()}
            </p>
            <p className="text-xl  font-normal inline text-violet-500">2nd</p>
            <h4 className=" font-light text-gray-400">
              {this.getCurrentMonth()}
            </h4>
          </div>
          <span className="flex-1 text-right font-medium leading-10 pt-1 text-gray-500">
            {this.props.todosCount} <span className="font-light"> todos</span>
          </span>
        </div>
      </div>
    );
  }
}
