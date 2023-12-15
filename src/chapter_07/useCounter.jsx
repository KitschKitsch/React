import React, { useState } from "react";

function UseCounter(initialValue) { // Custom Hook
    const [count, setCount] = useState(initialValue); // 초기값에 따른

    const increaseCount = () => setCount((count) => count + 1);
    const decreaseCount = () => setCount((count) => Math.max(count - 1, 0)); // count-1 과  0 을 비교하여 더 큰 값을 반환 (음수 방지)

    return [count, increaseCount, decreaseCount];
}

export default UseCounter;