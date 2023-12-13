import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey",
    },
    greeting: {
        marginRight: 8,
    },
};

const Toolbar = (props) => { // props 받을꺼임
    const { isLoggedIn, onClickLogin, onClickLogout } = props; // Toolbar 쓸거면 총 3가지 props 받아와야함

    return (
            <div style={styles.wrapper}>
                {isLoggedIn && <span style={styles.greeting}>환영합니다.</span>} {/*isLoggedIn == true면 실행*/}

                {isLoggedIn ? (
                        <button onClick={onClickLogout}>로그아웃</button> /*true 이면 LandingPage에서 onClickLogout 함수 실행됨 -> isLoggedIn 은 false 로 변경 */
                ) : (
                        <button onClick={onClickLogin}>로그인</button> /*false 이면 LandingPage에서 onClickLogin 함수 실행됨 -> isLoggedIn 은 true 로 변경 */
                )}
            </div>
    );
}

export default Toolbar;
