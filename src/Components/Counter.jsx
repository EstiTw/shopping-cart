import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement, counter } = this.props;

    return (
      <div className="row">
        <div className="col-1">
          <span className={this.getBadgeClasses(counter)}>
            {this.formatCount(counter)}
          </span>
        </div>

        <div className="col">
          <button
            onClick={() => onIncrement(counter)}
            className="btn btn-secondary btn-sm"
          >
            +
          </button>
          <button
            onClick={() => onDecrement(counter)}
            className="btn btn-sm m-2 btn-secondary"
            disabled={counter.value === 0 ? "disabled" : ""}
          >
            -
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onDelete(counter.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }

  getBadgeClasses(counter) {
    let classes = "badge m-2 badge-";
    classes += counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount(counter) {
    const { value } = counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
