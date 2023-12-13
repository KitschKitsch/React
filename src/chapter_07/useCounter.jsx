import React, { useState } from "react";

function UseCounter(initialValue) { // Custom Hook
    const [count, setCount] = useState(initialValue); // 초기값에 따른

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1),0);

    return [count, increaseCount, decreaseCount];
}

export default UseCounter;