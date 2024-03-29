import React, { useState, useEffect } from "react";

const Example = (props) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }); // 의존성변수 없으면 마운트+업데이트시마다 렌더링

    const clickCount = () => {
        return (setCount((current) =>  current + 1)) /* 직접 count+1 보다는 current 를 추천! */
    }

        return (
                <div>
                    <p>You clicked {count} times</p>
                    <button onClick={clickCount}>
                        Click me
                    </button>
                </div>
        );
}

export default Example;