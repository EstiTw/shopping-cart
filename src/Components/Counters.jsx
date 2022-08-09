import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    const { onDelete, onIncrement, onDecrement, onReset, counters } =
      this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset Cart
        </button>

        {counters.map((counter) => (
          <Counter
            onDelete={onDelete}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            key={counter.id}
            counter={counter}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
