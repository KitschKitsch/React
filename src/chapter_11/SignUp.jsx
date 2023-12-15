import React, { useState } from "react";

const SignUp = (props) => {
    const [name, setName] = useState(""); // 초기값 공백
    const [gender, setGender] = useState("남자"); // 초기값 남자

    const handleChangeName = (e) => {
        setName(e.target.value);
    }

    const handleChangeGender = (e) => {
        setGender(e.target.value);
    }

    const handleSubmit = (e) => {
        alert(`이름 : ${name}, 성별 : ${gender}`);
        e.preventDefault();
    }

    return (
            <form onSubmit={handleSubmit}>
                <label>
                    이름 : <input type="text" value={name} onChange={handleChangeName}/> {/*변할 때마다 함수 호출*/}
                </label>
                <br/> {/* React 는 항상 닫힘 태그 있어야함!!!!! */}
                <label>
                    성별 : <select value={gender} onChange={handleChangeGender}> {/*변할 때마다 함수 호출*/}
                        <option value="남자">남자</option>
                        <option value="여자">여자</option>
                    </select>
                </label>
                <button type="submit">제출</button>
            </form>
    )
}

export default SignUp;