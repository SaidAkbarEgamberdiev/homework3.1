import React, { useState } from "react";
import Counter from "./counter";
const Counters = () => {
  const initialState = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ];
  const [counters, setCounters] = useState(initialState);
  const handleDelete = (counterId) => {
    const newCounters = counters.filter((c) => c.id !== counterId);
    setCounters(newCounters);
  };
  const handleIncrement = (counterId) => {
    let newCounters = [];
    counters.forEach((counter) => {
      if (counter.id === counterId) {
        counter = {
          value: counter.value + 1,
          id: counter.id,
          name: counter.name,
        };
      }
      newCounters.push(counter);
    });
    setCounters(newCounters);
  };

  const handleDecrement = (counterId) => {
    let newCounters = [];
    counters.forEach((counter) => {
      if (counter.id === counterId && counter.value > 0) {
        counter = {
          value: counter.value - 1,
          id: counter.id,
          name: counter.name,
        };
      }
      newCounters.push(counter);
    });
    setCounters(newCounters);
  };
  const handleReset = () => setCounters(initialState);
  return (
    <div>
      <button onClick={handleReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>
      {counters.map((counter) => (
        <Counter
          key={counter.id}
          onDelete={handleDelete}
          onIncreament={handleIncrement}
          onDecrement={handleDecrement}
          {...counter}
        />
      ))}
    </div>
  );
};

export default Counters;
