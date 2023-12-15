import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accommodate(props) {
    const [isFull, setIsFull] = useState(false); // Hook은 맨 위에서!
    const [count, increaseCount, decreaseCount] = useCounter(0); // 그래야 매번 같은 순서로 가져옴

    useEffect(() => { // 의존성배열 없으면 마운트+업데이트 시마다 렌더링
        console.log("==========");
        console.log("useEffect() is called.");
        console.log(`isFull : ${isFull}`);
    });

    useEffect(() => { // 의존성배열 있으면 배열변할때마다 렌더링
        setIsFull(count >= MAX_CAPACITY); // cout가 10 이상인가?
        console.log(`Current count value : ${count}`);
    }, [count]);

    return (
            <div style={{padding: 16}}>
                <p>{`총 ${count}명을 수용했습니다.`}</p>

                <button onClick={increaseCount} disabled={isFull}>입장</button>
                <button onClick={decreaseCount}>퇴장</button>

                {isFull && <p style={{color : "red"}}>정원이 가득 찼습니다.</p> } {/*조건부 렌더링 true이면 p 태그 */}
            </div>
    );
}

export default Accommodate;