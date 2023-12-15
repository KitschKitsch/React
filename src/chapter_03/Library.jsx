import React from "react";
import Book from "./Book"; // 빈 껍데기 가져옴

const Library = () => {
    return (
        <div>
            <Book name="처음 만난 파이썬" numOfPage={300}/> {/* Book 이라는 빈 껍데기 컴포넌트에 내용(props) 넣어줌*/}
            <Book name="처음 만난 AWS" numOfPage={400}/>
            <Book name="처음 만난 리액트" numOfPage={500}/>
        </div>
    );
}

export default Library;