import React from "react";

const Counter = (props) => {
  const formValue = () => {
    return props.value === 0 ? "Zero" : props.value;
  };

  const getBadgeClasses = () => {
    let classes = "badge m-2 bg-";
    classes += props.value === 0 ? "danger" : "primary";
    return classes;
  };

  return (
    <React.Fragment>
      <h4>{props.name}</h4>
      <span className={getBadgeClasses()}>{formValue()}</span>
      <button
        onClick={() => props.onIncreament(props.id)}
        className="btn btn-secondary m-1"
      >
        Increment
      </button>
      <button
        onClick={() => props.onDecrement(props.id)}
        className="btn btn-secondary m-1"
      >
        Decrement
      </button>
      <button
        className="btn btn-danger btn-sm m-2"
        onClick={() => props.onDelete(props.id)}
      >
        Delete
      </button>
    </React.Fragment>
  );
};

export default Counter;
