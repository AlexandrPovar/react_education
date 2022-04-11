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
  const handleReset = () => {
    setCounters(initialState);
    console.log("handleReset");
  };
  const handleUpdate = () => {
    const updatedlState = [
      { id: 0, value: 2, name: "Ненужная вещь", price: "200" },
      { id: 1, value: 3, name: "Ложка" },
      { id: 2, value: 4, name: "Вилка" },
      { id: 3, value: 5, name: "Тарелка" },
      { id: 4, value: 0, name: "Надор минималиста" },
    ];
    setCounters(updatedlState);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter key={count.id} onDelete={handleDelete} {...count} />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
      <button className="btn btn-primary btn-sm m-2" onClick={handleUpdate}>
        Обновить состояние
      </button>
    </>
  );
};

export default CountersList;
