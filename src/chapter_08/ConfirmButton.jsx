import React, { useState } from "react";

const ConfirmButton = () => {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const handleConfirm = () => {
       setIsConfirmed((prev) => !prev); // useState의 set함수 매개변수는 항상 이전상태를 불러옴!
    };

    return (
        <button onClick={handleConfirm} disabled={isConfirmed}>
            {isConfirmed ? "확인됨" : "확인하기"}
        </button>
    );
}

export default ConfirmButton;

