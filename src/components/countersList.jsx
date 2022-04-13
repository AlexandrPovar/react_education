import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь", price: "200" },
    { id: 1, value: 4, name: "Ложка" },
    { id: 2, value: 4, name: "Вилка" },
    { id: 3, value: 0, name: "Тарелка" },
    { id: 4, value: 0, name: "Надор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);
  const handleDelete = (id) => {
    console.log("handleDelete", id);
    const newCounters = counters.filter((c) => c.id !== id);
    setCounters(newCounters);
  };
  const handleIncrement = (id) => {
    console.log("handleIncrement", id);
    const incrementValue = counters.map((count) =>
      count.id === id ? { ...count, value: count.value + 1 } : { ...count }
    );
    setCounters(incrementValue);
  };
  const handleDecrement = (id) => {
    console.log("handleDecrement", id);
    const decrementValue = counters.map((count) =>
      count.id === id ? { ...count, value: count.value - 1 } : { ...count }
    );
    setCounters(decrementValue);
  };
  const handleReset = () => {
    setCounters(initialState);
    console.log("handleReset");
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
          {...count}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
