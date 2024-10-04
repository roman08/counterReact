import React, { useState } from "react";

const Counter = () => {

  const [count, setCount] = useState(0);


  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 p-10 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-4">
        Counter: {count}
      </h1>

      <button onClick={increment} className="bg-blue-500 text-white px-6 py-2 rounded-lg m-2 hover:bg-blue-600">
        Increment
      </button>

      <button onClick={decrement} className="bg-blue-500 text-white px-6 py-2 rounded-lg m-2 hover:bg-blue-600">
        Decrement
      </button>
    </div>
  )
}

export default Counter;