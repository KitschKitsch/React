import React, { useState, useEffect } from "react";

const Clock = () => {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        setInterval(() => { // setInterval 첫번째 매갭변수는 콜백 함수로 써야 비동기 처리 가능!
            setTime(new Date().toLocaleTimeString());
        }, 1000);

    }, []);

    return (
            <div>
                <h1>안녕, 리액트!</h1>
                <h2>현재시간: {time}</h2>
            </div>
    );
}

export default Clock;
