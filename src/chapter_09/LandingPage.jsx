import React, { useState } from "react";
import Toolbar from "./Toolbar";

const LandingPage = () => {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false); // 초기값은 false

    const onClickLogin = () => {
        setIsLoggedIn(true);
    };

    const onClickLogout = () => {
        setIsLoggedIn(false);
    };

    return (
            <>
                <Toolbar // Toolbar 컴포넌트 쓸껀데 props 3개 채워서 써야함
                    isLoggedIn={isLoggedIn} // isLoggedIn에 false 값 담기
                    onClickLogin={onClickLogin} // onClickLogin에 함수담아서 true로 변경
                    onClickLogout={onClickLogout} // onClickLogout에 함수담아서 false로 변경
                />
                <div style={{ padding: 16 }}>소플과 함께하는 리액트 공😶부‍🌫️ 😶‍🌫️</div>
            </>
    );
}

export default LandingPage;