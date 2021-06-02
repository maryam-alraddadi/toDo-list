import React, { Component } from "react";

var today = new Date();

export default class Header extends Component {
  getCurrentDay() {
    return today.toLocaleString("en-us", { weekday: "long" }) + ", ";
  }

  getCurrentDayNumber() {
    let dayNumber = today.getUTCDay();
    let selector;
    if (dayNumber <= 0) {
      selector = 4;
    } else if ((dayNumber > 3 && dayNumber < 21) || dayNumber % 10 > 3) {
      selector = 0;
    } else {
      selector = dayNumber % 10;
    }
    return dayNumber + ["th", "st", "nd", "rd", ""][selector];
  }

  getCurrentMonth() {
    return today.toLocaleString("default", { month: "long" });
  }

  render() {
    return (
      <div className="max-w-2xl h-24 mx-auto px-8 py-6 rounded-t bg-gray-50">
        <div className="flex">
          <div className="flex-1">
            <p className="text-xl font-semibold inline text-violet-500">
              {this.getCurrentDay()}
            </p>
            <p className="text-xl  font-normal inline text-violet-500">
              {this.getCurrentDayNumber()}
            </p>
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
